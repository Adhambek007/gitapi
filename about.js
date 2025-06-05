let hero = document.querySelector('#hero');
let dataFetch = async () => {

    let res = await fetch("https://crm-test-api.duckdns.org/api/Leads", {
        headers:{
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6ImFzaWxiZWsiLCJ1bmlxdWVfbmFtZSI6Iis5OTg5MTQ1NDIzMzkiLCJqdGkiOiJkZjUyYjc3Ny1mOWNkLTQ2ZDMtYmRiZC0xNjM0OWY1NDE0ODYiLCJUZW5hbnRJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc1NTA5MzU4MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.KxecDMIk9jX5avwSXGJ83jbHNpeGN_GuaD7cZ_qV0ho`
        }
    });

    let response = await res.json();
}
dataFetch()

   function getLeads(data){
    data.forEach((item,index)=>{
        console.log(item)

        let li = document.createElement('li');
        li.innerHTML = `
        <p>${item.title}</p>
        `
        hero.appendChild(li)
    })
   }