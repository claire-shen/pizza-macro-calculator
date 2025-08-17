import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

import { cheeseDataT, cheeseDataCO, sauceInfo, crustSizeInfo, toppingInfo } from './dominosData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/pizza/sizes', (req, res) => {
    try {
        const sizes = Object.keys(crustSizeInfo);
        res.json({ success: true, data: sizes });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to fetch pizza sizes' });
    }
});

app.get('/api/pizza/crusts/:size', (req, res) => {
    try {
        const { size } = req.params;
        if (!crustSizeInfo[size]) {
            return res.status(400).json({ success: false, error: 'Invalid pizza size' });
        }
        
        const crusts = Object.keys(crustSizeInfo[size]);
        res.json({ success: true, data: crusts });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to fetch crust options' });
    }
});

app.post('/api/pizza/calculate', (req, res) => {
    try {
        const { size, crust, cheeseLevel, sauce, toppings } = req.body;
        
        // Validate required fields
        if (!size || !crust) {
            return res.status(400).json({ 
                success: false, 
                error: 'Size and crust are required' 
            });
        }

        // Calculate base nutrition from crust
        const baseNutrition = crustSizeInfo[size][crust];
        if (!baseNutrition) {
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid size/crust combination' 
            });
        }

        let totalNutrition = { ...baseNutrition };

        // Add cheese nutrition
        if (cheeseLevel) {
            const cheeseData = cheeseLevel.startsWith('T') ? cheeseDataT : cheeseDataCO;
            const cheeseNutrition = cheeseData[size][crust][cheeseLevel];
            if (cheeseNutrition) {
                totalNutrition.calories += cheeseNutrition.calories;
                totalNutrition.protein += cheeseNutrition.protein;
                totalNutrition.fats += cheeseNutrition.fats;
                totalNutrition.carbs += cheeseNutrition.carbs;
            }
        }

        // Add sauce nutrition
        if (sauce && sauceInfo[size][crust][sauce]) {
            const sauceNutrition = sauceInfo[size][crust][sauce];
            totalNutrition.calories += sauceNutrition.calories;
            totalNutrition.protein += sauceNutrition.protein;
            totalNutrition.fats += sauceNutrition.fats;
            totalNutrition.carbs += sauceNutrition.carbs;
        }

        // Add toppings nutrition
        if (toppings && Array.isArray(toppings)) {
            toppings.forEach(topping => {
                if (toppingInfo[size][crust][topping]) {
                    const toppingNutrition = toppingInfo[size][crust][topping];
                    totalNutrition.calories += toppingNutrition.calories;
                    totalNutrition.protein += toppingNutrition.protein;
                    totalNutrition.fats += toppingNutrition.fats;
                    totalNutrition.carbs += toppingNutrition.carbs;
                }
            });
        }

        res.json({
            success: true,
            data: {
                nutrition: totalNutrition,
                summary: {
                    size,
                    crust,
                    cheeseLevel: cheeseLevel || 'None',
                    sauce: sauce || 'None',
                    toppings: toppings || []
                }
            }
        });

    } catch (error) {
        console.error('Calculation error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to calculate nutrition' 
        });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Pizza Macro Calculator API is running!',
        timestamp: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Pizza Macro Calculator server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`🔌 API: http://localhost:${PORT}/api`);
}); 