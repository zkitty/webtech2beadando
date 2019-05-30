import { toast } from 'react-toastify';

class ToastMessages {

    showAssembleMessage(orderId, isAssembled) {
        let isAssembledString = "";
        if (isAssembled) {
            isAssembledString = "Shutter has been assembled."
        } else {
            isAssembledString = "Shutter has not been assembled yet."
        }

        toast(isAssembledString + " Order ID: " + orderId);
    }

    showInvoiceMessage(orderId, isInvoiced) {
        let isInvoicedString = "";
        if (isInvoiced) {
            isInvoicedString = "Invoice has been created."
        } else {
            isInvoicedString = "Invoice has not been created."
        }

        toast(isInvoicedString + " Order ID: " + orderId);
    }

    showPayMessage(orderId, isPaid) {
        let isPaidString = "";
        if (isPaid) {
            isPaidString = "Payment has been completed successfully."
        } else {
            isPaidString = "Payment has not been completed successfully."
        }

        toast(isPaidString + " Order ID: " + orderId);
    }

    showInstallationTimeMessage(orderId, installationTime) {
        const installationTimeString = installationTime.year + "."
            + installationTime.month + 1 + "."
            + installationTime.day + " "
            + installationTime.hours + ":00";

        toast("Installation has been organized for orderID: " + orderId + " " + installationTimeString);
    }

    showNewOrderMessage(orderId) {
        let successString = "";
        if (orderId) {
            successString = "Order has been created";
        } else {
            successString = "There was an error. Order has not been created."
        }

        toast(successString + " Order ID: " + orderId);
    }
}

export default new ToastMessages();
