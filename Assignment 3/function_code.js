// Simulating an asynchronous function to fetch order data from an API
function fetchOrderData(callback) {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
        const orderData = { id: 101, item: "iPhone", amount: 80000 };
        callback(null, orderData);
    }, 1000);
}

// Simulating an asynchronous function to process order data
function processOrderData(orderData, callback) {
    // Simulating data processing delay with setTimeout
    setTimeout(() => {
        // Adding additional information to order data
        orderData.tax = orderData.amount * 0.1;
        callback(null, orderData);
    }, 1000);
}

// Function to display order data
function displayOrderData(orderData, callback) {
    // Simulating display delay with setTimeout
    setTimeout(() => {
        console.log("Order ID:", orderData.id);
        console.log("Item:", orderData.item);
        console.log("Amount:", orderData.amount);
        console.log("Tax:", orderData.tax);
        callback();
    }, 1000);
}

// Function to handle errors
function handleOrderError(error) {
    console.error("Error:", error);
}

// Callback hell version: fetch, process, and display order data
fetchOrderData((fetchError, orderData) => {
    if (fetchError) {
        handleOrderError(fetchError);
    } else {
        processOrderData(orderData, (processError, processedOrderData) => {
            if (processError) {
                handleOrderError(processError);
            } else {
                displayOrderData(processedOrderData, (displayError) => {
                    if (displayError) {
                        handleOrderError(displayError);
                    } else {
                        console.log("Order data displayed successfully.");
                    }
                });
            }
        });
    }
});
