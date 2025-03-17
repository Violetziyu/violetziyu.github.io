document.addEventListener("DOMContentLoaded", () => {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    // 同步滚动事件
    image1.addEventListener("scroll", () => {
        image2.scrollTop = image1.scrollTop; // 将image1的滚动位置同步到image2
    });

    image2.addEventListener("scroll", () => {
        image1.scrollTop = image2.scrollTop; // 将image2的滚动位置同步到image1
    });

    // 捕获整个屏幕的滚动事件
    document.addEventListener("wheel", (e) => {
        const deltaY = e.deltaY; // 获取滚动方向
        image1.scrollTop += deltaY; // 同步滚动到两个容器
        image2.scrollTop += deltaY;
        e.preventDefault(); // 阻止默认滚动行为
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const stickySection = document.getElementById("section3");
    const innerContent = stickySection.querySelector(".inner-content");
    let isSticky = false;

    window.addEventListener("scroll", () => {
        const rect = stickySection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // 检测是否滚动到第三个section
        if (rect.top <= 0 && rect.bottom >= viewportHeight) {
            if (!isSticky) {
                isSticky = true;
                innerContent.style.position = "fixed";
                innerContent.style.top = "0";
                innerContent.style.width = "100%";
            }
        } else {
            if (isSticky) {
                isSticky = false;
                innerContent.style.position = "absolute";
                innerContent.style.top = "0";
                innerContent.style.width = "100%";
            }
        }
    });

    innerContent.addEventListener("scroll", () => {
        if (innerContent.scrollTop + innerContent.clientHeight >= innerContent.scrollHeight) {
            // 内容滚动到底部，恢复页面滚动
            isSticky = false;
            innerContent.style.position = "absolute";
            innerContent.style.top = "0";
            innerContent.style.width = "100%";
        }
    });
});

