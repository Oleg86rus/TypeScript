interface Order {
    address: string
}

interface TelephoneOrder extends Order{
    callNumber: string
}

interface InternetOrder extends Order {
    email: string
}

type PossibleOrder = TelephoneOrder | InternetOrder | undefined

function isInternetOrder(order: PossibleOrder): order is InternetOrder {
    return !!order && 'email' in order
}

function isATelephoneOrder(order: PossibleOrder): order is TelephoneOrder {
    return !!order && 'callNumber' in order
}

function makeOrder (order: PossibleOrder) {
    if (isInternetOrder(order)) {
        console.log(order.email)
    } else if (isATelephoneOrder(order)) {
        console.log(order.callNumber)
    }
}