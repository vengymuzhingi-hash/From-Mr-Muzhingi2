function showPage(pageId) {
    // 1. Find all sections with the class "page"
    const pages = document.querySelectorAll('.page');
    
    // 2. Hide every single one of them
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 3. Find the one page we actually want to see
    const targetPage = document.getElementById(pageId);
    
    // 4. If it exists, make it visible!
    if (targetPage) {
        targetPage.classList.add('active');
        
        // This makes sure the new page starts at the top
        window.scrollTo(0, 0);
    }
}

}
