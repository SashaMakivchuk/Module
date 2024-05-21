(function() {
    let acc = new AccountWithDom();

    acc.add(new AccountWithId("1", "John", "Doe", "Accounter2", "2000", "4", "6", "image1.jpg"));
    acc.add(new AccountWithId("2", "Jane", "Doe", "Accounter", "3000", "2", "3", "image2.jpg"));

    acc.mount(document.getElementById("root"));

    // Function to get acc instance
    function getAccInstance() {
        return acc;
    }

    // Assign the function to the global scope for use in event handlers
    window.getAccInstance = getAccInstance;
})();