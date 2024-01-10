const inputs = document.querySelectorAll('input')

const handsubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=name]').Value;
    const email = document.querySelector('input[name=email]').Valu
    fetch('https://api.sheetmonkey.io/form/dzXpxxYrQfJM2U8KEVY5hq', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'aplication/json',
        },
        body JSON.stringify({ name, email
        }),
    });
}

document.querySelector('form').addEventListener('submit', handsubmit)

