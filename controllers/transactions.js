const Transaction = require('./models/Transaction');

/**  
* @desc Get all transactions
* @route GET /api/v1/transactions
* access Public
*/
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            succsess: true,
            count: transactions.length,
            data: transactions
        });//200 generic OK
    } catch (err) {
        return res.status(500).json({
            succsess: false,
            error: 'Server Error'
        });//500 generic problem
    }


}
/**  
* @desc Add transactions
* @route POST /api/v1/transactions
* access Public
*/
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            succsess: true,
            data: transaction
        }); //201 client send correctly info
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors)
                .map(val => val.message);
            return res.status(400).json({
                succsess: false,
                error: messages


            }); //400 client error didnt send what supposed to
        }
        return res.status(500).json({
            succsess: false,
            error: 'Server Error'
        });//500 Global warning
    }
}
/**  
* @desc Delete a transaction
* @route DELETE /api/v1/transaction/:id
* access Public
*/
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                succsess: false,
                error: 'Transaction not found'
            }
            )
        };
        await transaction.remove();
        return res.status(200).json({
            sucsses: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            succsess: false,
            error: 'Server Error'
        });//500 Global warning
    }


}

