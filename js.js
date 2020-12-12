let body1 = document.getElementsByTagName('body');
let orqa1 = document.createElement('div');
orqa1.className = 'orqa';
document.body.appendChild(orqa1);
let form1 = document.createElement('form');
form1.action = '';
form1.name = 'bor';
form1.method = 'GET';
form1.style.width = '40%';
form1.style.maxWidth = '50%';
form1.style.border = 'white 0px solid';
form1.style.margin = 'auto';
form1.style.backgroundColor = 'none';
form1.style.position = 'relative';
form1.style.borderRadius = '10px';
orqa1.appendChild(form1);
let fielset1 = document.createElement('fieldset');
fielset1.border = 'solid 0px black';
fielset1.margin = 'auto';
fielset1.backgroundColor = 'none';
fielset1.position = 'relative';
fielset1.width = '80%';
form1.appendChild(fielset1);
let sarlavha = document.createElement('h1');
sarlavha.style.margin = 'auto';
sarlavha.style.fontSize = '35px';
sarlavha.style.textAlign = 'left';
fielset1.appendChild(sarlavha);
let b1 = document.createElement('b')
b1.innerText = 'Create an account';
sarlavha.appendChild(b1);
let sarlavha1 = document.createElement('h1');
sarlavha1.innerText = 'Quick and easy'
sarlavha1.style.margin = 'auto';
sarlavha1.style.fontSize = '28px';
sarlavha1.style.textAlign = 'left';
sarlavha1.style.opacity = '0.5';
sarlavha1.style.marginTop = '10px'
fielset1.appendChild(sarlavha1);
let ism = document.createElement('input');
ism.type = 'text';
ism.placeholder = 'Name';
ism.required;
ism.style.width = '43%';
ism.style.padding = '15px'
ism.style.marginTop = '10px';
ism.style.border = '1px solid black';
ism.style.borderRadius = '8px';
ism.style.fontSize = '20px';
fielset1.appendChild(ism);
let familiya = document.createElement('input');
familiya.type = 'text';
familiya.placeholder = 'Surname';
familiya.required;
familiya.style.width = '43%';
familiya.style.padding = '15px'
familiya.style.float = 'right';
familiya.style.marginTop = '10px';
familiya.style.border = '1px solid black';
familiya.style.borderRadius = '8px';
familiya.style.fontSize = '20px';
fielset1.appendChild(familiya);
let manzil = document.createElement('input');
manzil.type = 'text';
manzil.placeholder = 'Mobile phone number or email address';
manzil.required;
manzil.style.width = '94%';
manzil.style.padding = '15px'
manzil.style.marginTop = '10px';
manzil.style.border = '1px solid black';
manzil.style.borderRadius = '8px';
manzil.style.fontSize = '20px';
fielset1.appendChild(manzil);
let parol = document.createElement('input');
parol.type = 'text';
parol.placeholder = 'New password';
parol.required;
parol.style.width = '94%';
parol.style.padding = '15px'
parol.style.marginTop = '10px';
parol.style.border = '1px solid black';
parol.style.borderRadius = '8px';
parol.style.fontSize = '20px';
fielset1.appendChild(parol);
let sarlavha2 = document.createElement('h1');
sarlavha2.innerText = 'Date of birth';
sarlavha2.style.margin = 'auto';
sarlavha2.style.fontSize = '28px';
sarlavha2.style.textAlign = 'left';
sarlavha2.style.opacity = '0.5';
sarlavha2.style.marginTop = '10px'
fielset1.appendChild(sarlavha2);

let oldi = document.createElement('select');
oldi.style.width = '10%';
oldi.style.fontSize = '24px';
oldi.style.margin = '3px';
fielset1.appendChild(oldi);
let a = [];
for (let i = 1; i <= 31; i++) {

    a[i] = document.createElement('option');
    a[i].innerText = `${i}`
    oldi.appendChild(a[i]);
}

let orta = document.createElement('select');
orta.style.width = '40%';
orta.style.fontSize = '24px';
orta.style.margin = '3px';
fielset1.appendChild(orta);

let c = [];
c[1] = document.createElement('option');
c[1].innerText = 'January';
orta.appendChild(c[1]);
c[2] = document.createElement('option');
c[2].innerText = 'February';
orta.appendChild(c[2]);
c[3] = document.createElement('option');
c[3].innerText = 'March';
orta.appendChild(c[3]);
c[4] = document.createElement('option');
c[4].innerText = 'April';
orta.appendChild(c[4]);
c[5] = document.createElement('option');
c[5].innerText = 'May';
orta.appendChild(c[5]);
c[6] = document.createElement('option');
c[6].innerText = 'June';
orta.appendChild(c[6]);
c[7] = document.createElement('option');
c[7].innerText = 'July';
orta.appendChild(c[7]);
c[8] = document.createElement('option');
c[8].innerText = 'August';
orta.appendChild(c[8]);
c[9] = document.createElement('option');
c[9].innerText = 'September';
orta.appendChild(c[9]);
c[10] = document.createElement('option');
c[10].innerText = 'October';
orta.appendChild(c[10]);
c[11] = document.createElement('option');
c[11].innerText = 'November';
orta.appendChild(c[11]);
c[12] = document.createElement('option');
c[12].innerText = 'December';
orta.appendChild(c[12]);

let oxiri = document.createElement('select');
oxiri.style.width = '20%';
oxiri.style.fontSize = '24px';
oxiri.style.margin = '3px';
fielset1.appendChild(oxiri);

let b = [];
for (let j = 2020; j > 1970; j--) {

    b[j] = document.createElement('option');
    b[j].innerText = `${j}`;
    oxiri.appendChild(b[j]);
}

let sarlavha3 = document.createElement('h1');
sarlavha3.innerText = 'Floor';
sarlavha3.style.margin = 'auto';
sarlavha3.style.fontSize = '28px';
sarlavha3.style.textAlign = 'left';
sarlavha3.style.opacity = '0.5';
sarlavha3.style.marginTop = '10px'
fielset1.appendChild(sarlavha3);
let female = document.createElement('input');
female.type = 'radio';
female.name = 'jins';
female.required;
fielset1.appendChild(female);
let labelf = document.createElement('label');
labelf.innerText = 'Female';
labelf.style.fontSize = '35px';
fielset1.appendChild(labelf);
let male = document.createElement('input');
male.type = 'radio';
male.name = 'jins';
male.required;
fielset1.appendChild(male);
let labelm = document.createElement('label');
labelm.innerText = 'Male';
labelm.style.fontSize = '35px';
fielset1.appendChild(labelm);
let other = document.createElement('input');
other.type = 'radio';
other.name = 'jins';
other.required;
fielset1.appendChild(other);
let labelo = document.createElement('label');
labelo.innerText = 'Other';
labelo.style.fontSize = '35px';
fielset1.appendChild(labelo);
let p1 = document.createElement('p');
p1.innerText = "By clicking Register,you agree to the Terms,Data Policy and Cookie Policy.You can receive SMS notifications from us and you  can unsubscribe from them at any time.";
p1.style.opacity = '0.5';
fielset1.appendChild(p1);
let tugma = document.createElement('input');
tugma.value = 'Sign Up';
tugma.type = 'submit';
tugma.style.backgroundColor = 'rgb(35, 207, 35)';
tugma.style.color = 'white';
tugma.style.width = '50%';
tugma.style.padding = '15px';
tugma.style.float = 'center';
tugma.style.marginTop = '10px';
tugma.style.marginLeft = '23%';
tugma.style.border = '1px solid black';
tugma.style.borderRadius = '8px';
tugma.style.fontSize = '30px';
fielset1.appendChild(tugma);

