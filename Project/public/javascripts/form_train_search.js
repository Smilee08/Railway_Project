  
            const form=document.querySelector('#form');
             
            
            form.addEventListener('submit',(e)=>{
                e.preventDefault();
                const fd=new FormData(form);
                const obj=Object.fromEntries(fd);
              
    
                const json=JSON.stringify(obj);
                window.localStorage.setItem('#form',json);
                
             
                window.location.href='/train';
            });
    
       