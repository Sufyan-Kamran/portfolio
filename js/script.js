document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the item is visible
    });

    items.forEach(item => {
        observer.observe(item);
    });
  }); 
  function downloadResume(id){
      console.log(typeof id);
      if(id === 0){
          const link = document.createElement('a');
          link.href = 'upload/resume/Sufyan Ahmed Resume.pdf'; // Replace with your PDF file path
          link.download = 'Sufyan Ahmed Resume.pdf'; // Specify the file name
          link.click();
  }
      else if(id === 1){
          const link = document.createElement('a');
          link.href = 'upload/resume/Sufyan Ahmed Automation Resume.pdf'; // Replace with your PDF file path
          link.download = 'Sufyan Ahmed Resume.pdf'; // Specify the file name
          link.click();
      }
      
  }
