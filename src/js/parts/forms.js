"use strict"

const url = '';

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form')

    if (forms.length) {
        forms.forEach(form => {
            form.addEventListener('submit', async function (e) {
                e.preventDefault();

                removeExistingErrorMsgs(form);
                let error = validateForm(form)
                console.log(error);

                const formData = new FormData(form);

                if (formFile && formFile.files[0]) {
                    formData.append('file', formFile.files[0]);
                }

                if (error === 0) {
                    form.classList.add('_sending');

                    let response = await fetch(url, {
                        method: 'POST',
                        body: formData
                    });

                    if (response.ok) {
                        sentMessage(form)
                        form.reset();
                        form.classList.remove('_sending');

                        setTimeout(() => {

                        }, 5000);
                    }
                    else {
                        failMessage(form)
                        form.classList.remove('_sending');

                        setTimeout(() => {

                        }, 5000);
                    }
                }
                else {
                    fillAllFields(form)

                    form.classList.remove('_sending');
                    setTimeout(() => {

                    }, 5000);
                }
            })

            checkCheckBoxes(form)
        })
    }

    function validateForm(form) {
        let error = 0;
        const formReq = [...form.querySelectorAll('[data-required] input')].concat([...form.querySelectorAll('[data-required] textarea')])

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i]

            formRemoveError(input);
            validateInput()

            input.addEventListener('input', function () {
                formRemoveError(input);
                validateInput();
            })

            function validateInput() {
                if (input.getAttribute('type') === 'email') {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                    else {
                        formRemoveError(input);
                    }
                }
                else {
                    if (input.getAttribute('name') === 'phone') {
                        if (/[_]/.test(input.value) || input.value.length < 16) {
                            formAddError(input);
                            error++;
                        } else {
                            formRemoveError(input);
                        }
                    }
                    else {
                        if (input.value.length < 2) {
                            formAddError(input);
                            error++;
                        } else {
                            formRemoveError(input);
                        }
                    }
                }
            }
        }

        const checkBoxContainers = form.querySelectorAll('[data-checkbox-container]')
        let checkedArr = [];
        for (let i = 0; i < checkBoxContainers.length; i++) {
            const checkBoxes = [...checkBoxContainers[i].querySelectorAll('input')]

            checkBoxes.forEach(input => {
                input.addEventListener('input', function () {
                    input.closest('[data-checkbox-container]').classList.remove('_error')
                })
            })

            checkedArr.push(checkBoxes.some(input => {
                if (!input.checked) {
                    input.closest('[data-checkbox-container]').classList.add('_error')
                }
                else {
                    input.closest('[data-checkbox-container]').classList.remove('_error')
                }
                return input.checked
            }))
        }

        checkedArr.forEach((elem, i) => {
            if (elem == true) {
                removeElemErrorMsg(checkBoxContainers[i])
            }
            else {
                addErrorMsg(checkBoxContainers[i], checkBoxContainers[i].closest('.form__block').querySelector('.form__block-title').textContent)
            }
        });


        const checked = checkedArr.every(check => { return check == true })
        if (!checked === true) error++

        return error;
    }

    function formAddError(input) {
        input.closest('.form__item').classList.add('_error');
        addErrorMsg(input, input.placeholder)
    }

    function formRemoveError(input) {
        input.closest('.form__item').classList.remove('_error');
        removeElemErrorMsg(input)

        const submitBtnBlock = input.closest('form').querySelector('.form__button .error-msgs')
        const existMsgs = submitBtnBlock.querySelectorAll('.form__button .error-msgs a')

        if (!existMsgs.length) {
            submitBtnBlock.classList.add('_hide')
            removeExistingErrorMsgs(input.closest('form'));
        }
    }

    function addErrorMsg(elem, text) {
        removeElemErrorMsg(elem)
        const submitBtnBlock = elem.closest('form').querySelector('.form__button .error-msgs')
        const item = `<a href="#${elem.id}" data-id="${elem.id}">${text},</a>`
        submitBtnBlock.classList.remove('_hide')
        submitBtnBlock.querySelector('span').insertAdjacentHTML('beforeend', item)
    }

    function removeElemErrorMsg(elem) {
        const msg = elem.closest('form').querySelector(`.form__button .error-msgs a[data-id="${elem.id}"]`)
        if (msg) {
            msg.remove();
        }
    }

    function removeExistingErrorMsgs(form) {
        const existMsgs = form.querySelectorAll('.form__button .error-msgs a')
        if (existMsgs.length) {
            existMsgs.forEach(m => m.remove())
        }
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function sentMessage(form) {
        const submitBtn = form.querySelector('.form__button button')
        submitBtn.classList.add('_sent');
    }

    function failMessage(form) {
        const submitBtn = form.querySelector('.form__button button')
        submitBtn.classList.add('_fail');
    }

    function fillAllFields(form) {
        const submitBtn = form.querySelector('.form__button button')
        submitBtn.classList.add('_error');
    }

    const formFile = document.querySelector('input[name="file"]');
    if (formFile) {
        formFile.addEventListener('change', () => {
            if (formFile.files[0]) {
                uploadFile(formFile.files[0]);
            }
        });

        function uploadFile(file) {

            if (!['application/msword', 'application/pdf', 'application/vnd.ms-powerpoint', 'text/plain'].includes(file.type)) {
                alert('Разрешены только текстовые документы.');
                document.querySelector('#filename').innerHTML = '';
                formFile.value = '';
                return;
            }
            if (file.size > 20 * (1024 * 1024)) {
                alert('Файл должен быть менее 20 МБ.');
                return;
            }

            var reader = new FileReader();

            reader.onload = function (e) {
                document.querySelector('.filename').innerHTML = file.name;
                document.querySelector('._delete-file').classList.add('_active');
            };

            reader.onerror = function (e) {
                alert('Ошибка');
            };

            reader.readAsDataURL(file);
        }
    }
});

function checkCheckBoxes(form) {
    const checkBoxContainers = form.querySelectorAll('[data-checkbox-container]')
    if (checkBoxContainers.length) {
        checkBoxContainers.forEach(container => {
            const cehckboxes = container.querySelectorAll('input[type="checkbox"]')
            if (cehckboxes.length) {
                cehckboxes.forEach(checkbox => {
                    checkbox.addEventListener('input', () => {
                        cehckboxes.forEach(item => {
                            if (item != checkbox) {
                                item.checked = false
                            }
                        })
                    })
                })
            }
        })
    }
}


const fileDeleteBtn = document.querySelector('._delete-file');
if (fileDeleteBtn) {
    fileDeleteBtn.addEventListener('click', (e) => {
        document.querySelector('.filename').innerHTML = '+ Прикрепить файл';
        e.target.classList.remove('_active');
    })
}