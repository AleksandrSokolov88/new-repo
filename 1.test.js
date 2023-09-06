test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch("https://ebd371da-e3b8-4501-a5b0-f0fc9c0e22cb.serverhub.tripleten-services.com/api/v1/warehouses");
        // Extract response code status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
}); 12312313123