    function setActiveLink() {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const currentHash = window.location.hash;

        document.querySelectorAll(".navbar .nav-link").forEach(link => {
            const href = link.getAttribute("href");

            // reset
            link.classList.remove("active-link");
            console.log(currentPath,href);
            

            if (!href) return;

            // split href into page + hash
            const [linkPath, linkHash] = href.split("#");

            // case 1: page only (index.html)
            if (
                linkPath === currentPath &&
                !linkHash &&
                !currentHash
            ) {
                link.classList.add("active-link");
            }

            // case 2: page + hash (index.html#price)
            if (
                linkPath === currentPath &&
                linkHash &&
                "#" + linkHash === currentHash
            ) {
                link.classList.add("active-link");
            }
        });
    }

    // on page load
    setActiveLink();

    // when hash changes (click / scroll)
    window.addEventListener("hashchange", setActiveLink);
