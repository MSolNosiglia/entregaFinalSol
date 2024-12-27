document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    
    const footerContent = `
      <div class="footer">
        <div class="contFooter">
          <h4>Contactanos</h4>
          <h5>OHiggins 4391</h5>
          <h5>+54 9 11 50577366</h5>
          <h5>info@defensas.com</h5>
        </div>
    
        <div class="contFooter">
          <h4>Horarios:</h4>
          <h6>Lunes - Viernes</h6>
          <h5>8.00 AM - 8.00 PM</h5>
          <h6>Sabados - Domingos</h6>
          <h5>8.00 AM - 12.00 PM</h5>
        </div>
    
        <div class="contFooter">
          <h4>NEWSLETTER</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <form action="" class="signup-form">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit">Sign Up</button>
          </form>
        </div>
    
        <div class="pie">
          <p>
            Copyright 
            <i class="fa-regular fa-copyright"></i>
            <span class="otro-color">Cosme</span>. 
            All Rights Reserved
          </p>
          <p>
            Designed by 
            <span class="otro-color">Cosme Fulanito</span>
          </p>
        </div>
      </div>
    `; 
    footer.innerHTML=footerContent;
    });

//Menu hamburguesa

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});

//form
const formulario = document.getElementById('miFormulario'); 

formulario.addEventListener('submit', (evento) => { 
    evento.preventDefault(); 
    alert("Gracias por contactarnos");
    formulario.reset(); 
});


