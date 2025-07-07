document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired'); // Thêm dòng này
        const showFlowerButton = document.getElementById('showFlowerButton');
        const body = document.body;
        const titleElement = document.getElementById('title');
        // Lấy tham chiếu đến phần nội dung 404
        const page404Section = document.querySelector('.page_404'); 
      
        // Chọn tất cả các yếu tố của hiệu ứng hoa
        const flowerElements = document.querySelectorAll('.night, .flowers, .flower__g-long, .growing-grass, .flower__g-right, .flower__g-fr, .long-g, .title');
      
        // Ẩn tất cả các yếu tố hoa ban đầu
        flowerElements.forEach(el => el.style.visibility = 'hidden');
        body.classList.add('not-loaded');
      
      
        showFlowerButton.addEventListener('click', () => {
          console.log('Show Flowers button clicked!'); // Thêm dòng này
          // Ẩn toàn bộ phần nội dung 404
          if (page404Section) {
            page404Section.style.display = 'none'; // Hoặc page404Section.style.opacity = '0';
            // Nếu bạn dùng opacity, có thể thêm transition cho mượt mà hơn trong CSS
          }
      
          // Sau một khoảng thời gian ngắn (để cho cảnh 404 biến mất), hiển thị hiệu ứng hoa
          setTimeout(() => {
            console.log('Timeout finished, showing flowers and removing not-loaded.'); // Thêm dòng này
            flowerElements.forEach(el => el.style.visibility = 'visible');
            body.classList.remove("not-loaded");
      
            const titles = ('Hey, just a question. Are you mad at me? You are so cold today,can we continue talking? I am sorry for what I said yesterday, dont think about it anymore').split('');
            let index = 0;
      
            function appendTitle() {
              if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 150);
              }
            }
      
            // Bắt đầu hiệu ứng nhập tiêu đề
            appendTitle();
          }, 500); // 500ms delay: đợi 0.5 giây sau khi 404 biến mất rồi mới hiện hoa
        });
      });