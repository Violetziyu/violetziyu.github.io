
  // 用于处理锚点点击事件
  document.querySelectorAll('.small-image').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止默认的锚点跳转行为
      var target = document.querySelector(this.getAttribute('href')); // 获取目标元素
      target.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标元素
    });
  });

    // 滚动到页面顶端的函数
  function scrollToTop() {
    document.body.scrollTop = 0; // 对于 Safari
    document.documentElement.scrollTop = 0; // 对于 Chrome, Firefox, IE 和 Opera
  }
  




