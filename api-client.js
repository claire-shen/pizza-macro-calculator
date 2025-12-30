class PizzaAPIClient {
    constructor(baseURL = null) {
        // Auto-detect environment if baseURL not provided
        if (baseURL === null) {
            if (typeof window !== 'undefined') {
                const hostname = window.location.hostname;
                if (hostname === 'localhost' || hostname === '127.0.0.1') {
                    this.baseURL = 'http://localhost:3000';
                } else {
                    this.baseURL = window.API_BASE_URL || 'https://pizza-macro-calculator.onrender.com';
                }
            } else {
                this.baseURL = process.env.API_URL || 'http://localhost:3000';
            }
        } else {
            this.baseURL = baseURL;
        }
    }

    async getPizzaSizes() {
        try {
            const response = await fetch(`${this.baseURL}/api/pizza/sizes`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching pizza sizes:', error);
            throw error;
        }
    }

    async getCrustOptions(size) {
        try {
            const response = await fetch(`${this.baseURL}/api/pizza/crusts/${size}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching crust options:', error);
            throw error;
        }
    }

    async calculateNutrition(pizzaData) {
        try {
            const response = await fetch(`${this.baseURL}/api/pizza/calculate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pizzaData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error calculating nutrition:', error);
            throw error;
        }
    }

    async checkHealth() {
        try {
            const response = await fetch(`${this.baseURL}/api/health`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PizzaAPIClient;
} 