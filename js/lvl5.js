
localStorage.removeItem('level_5_flag')
localStorage.removeItem('lvl5_key')

// document.onload = function deleteKeys() {
//     localStorage.removeItem('level_5_flag')
//     localStorage.removeItem('lvl5_key')
// }


// document.onloadstart = function del() {
//     localStorage.removeItem('level_5_flag')
//     localStorage.removeItem('lvl5_key')
// }
async function getFinalKey() {
    const secret = document.getElementById('secret').value;

    axios({
        method: 'post',
        url: 'https://sms-af.herokuapp.com/api/ctf/auth',
        data: {
            token: localStorage.getItem('lvl5_key'),
            key: secret
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(function (response) {
            localStorage.setItem('level_5_flag', response.data.message)
            localStorage.removeItem('lvl5_key')

        })
        .catch(function (response) {
            console.log(response);
        });

}
async function getBasicKey() {

    const name = document.getElementById("name").value;
    const date = document.getElementById('date').value;


    axios({
        method: 'post',
        url: 'https://sms-af.herokuapp.com/api/ctf/getKey',
        data: {
            name: name,
            date: date
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(function (response) {
            //handle success
            console.log(response.data);
            localStorage.setItem('lvl5_key', response.data.token)
            alert('You recieved the key.')
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    // console.log(name,date)

    // fetch('http://localhost:5000/api/ctf/getKey', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name: 'Hubot',
    //         date: 'hubot',
    //       })
    // }).then(res=>{
    //     console.log(res)
    //     res.json()
    // })
    // .then(response => {
    //     console.log(response)
    // }).catch(err =>{
    //     console.log(err)
    // })



}