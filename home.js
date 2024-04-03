
const urlParams = new URLSearchParams(window.location.search);
const acno = urlParams.get('acno');
const ud = JSON.parse(localStorage.getItem(acno))
const unm = ud.usernm
const nm = document.getElementById('heading')
nm.innerHTML = `Welcome <span id="un"> &nbsp;${unm}</span>`

function BalanceDisplay(balance, elementId,duration) {
    const disp = document.getElementById(elementId);
    disp.innerHTML = `Your current balance is: <span>${balance}</span>`;
    
    setTimeout(() => {
        disp.innerHTML = ''; // Clear the content after the duration
    },  duration * 1000); // Convert seconds to milliseconds
}

function deposit() {
    if (damt.value > 0 && damt.value) {
        if (dpswd.value === ud.paswd) {
            ud.balance += parseInt(damt.value)
            localStorage.setItem(acno, JSON.stringify(ud))
            alert(`${damt.value} has been added to your account`)
            damt.value=""
            dpswd.value=""
            BalanceDisplay(ud.balance, 'dbal',5);
        }
        else {
            alert('Incorrect Password')
        }
    }
    else {
        alert('Enter a valid amount')
    }
}

function withdraw() {


    if (wamt.value > 0 && wamt.value) {
        if (wpswd.value === ud.paswd) {
            if (ud.balance>=wamt.value) {
                ud.balance -= parseInt(wamt.value)
                localStorage.setItem(acno, JSON.stringify(ud))
                alert(`${wamt.value} has been withdrawed from your account`)
                wamt.value=""
                wpswd.value=""
                BalanceDisplay(ud.balance, 'wbal',5);
            }
            else{
                alert('Insufficient Balance')
            }
        }
        else {
            alert('Incorrect Password')
        }
    }
    else {
        alert('Enter a valid amount')
    }
}

