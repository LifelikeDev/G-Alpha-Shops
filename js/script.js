 const mainWrapper = document.querySelector('.main-wrapper');
 const openNav = document.querySelector('.open-nav');
 const closeNav = document.querySelector('.close-nav');
 const modalViewButtons = document.querySelectorAll('#card-btn');
 const modalWrappers = document.querySelectorAll('.modal-wrapper');
 const modalClose = document.querySelectorAll('#close');

 openNav.addEventListener('click', () => {
    mainWrapper.classList.add('slide');
 });

 closeNav.addEventListener('click', () => {
    mainWrapper.classList.remove('slide');
 });

 modalViewButtons.forEach(modalViewButton => {
    modalViewButton.addEventListener('click', () => {

      const modalViewKey = modalViewButton.dataset.key;

      modalWrappers.forEach(modalWrapper => {
         const modalWrapperKey = modalWrapper.dataset.key;

         if (modalViewKey === modalWrapperKey) {
            modalWrapper.classList.add('active');
         }

      // console.log(modalWrapper.dataset.key);
      //   modalWrapper.classList.add('active'); 
      });
    });
 });

 modalClose.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
       
      modalWrappers.forEach(modalWrapper => {
         modalWrapper.classList.remove('active');
      });
    });
 });