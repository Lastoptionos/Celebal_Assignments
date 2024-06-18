// Simulating an asynchronous function to fetch order data from an API
function fetchOrderData() {
    return new Promise((resolve, reject) => {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
            const orderData = { id: 101, item: "iPhone", amount: 80000 };
            resolve(orderData);
        }, 1000);
    });
}

// Simulating an asynchronous function to process order data
function processOrderData(orderData) {
    return new Promise((resolve, reject) => {
        // Simulating data processing delay with setTimeout
        setTimeout(() => {
            // Adding additional information to order data
            orderData.tax = orderData.amount * 0.1;
            resolve(orderData);
        }, 1000);
    });
}

// Function to display order data
function displayOrderData(orderData) {
    return new Promise((resolve, reject) => {
        // Simulating display delay with setTimeout
        setTimeout(() => {
            console.log("Order ID:", orderData.id);
            console.log("Item:", orderData.item);
            console.log("Amount:", orderData.amount);
            console.log("Tax:", orderData.tax);
            resolve();
        }, 1000);
    });
}

// Async function to fetch, process, and display order data
async function fetchProcessAndDisplayOrderData() {
    try {
        const orderData = await fetchOrderData();
        const processedOrderData = await processOrderData(orderData);
        await displayOrderData(processedOrderData);
        console.log("Order data displayed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling the async function to execute the process
fetchProcessAndDisplayOrderData();
