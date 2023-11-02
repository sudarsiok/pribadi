function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    var result = document.getElementById('result');
    result.innerHTML = `Umur Anda adalah ${age} tahun.`;

    
}