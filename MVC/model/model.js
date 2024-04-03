module.exports = {
    calculateFee: function(status) {
        switch (status) {
            case 'student':
                return '10';
            case 'staff':
                return '50';
            case 'volunteer':
                return '0';
            default:
                return 'N/A';
        }
    }
};