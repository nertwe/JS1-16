const tickets = [
    { id: 'ser10us1y', city: 'Москва', arrival: '04:00' },
    { id: 'ohMy34', city: 'Токио', arrival: '21:00' },
    { id: 'iddqd', city: 'Балтийск', arrival: '01:30' },
    { id: 'ja34ja21ja', city: 'Париж', arrival: '19:03' },
    { id: 'no3i5man', city: 'Нью-Йорк', arrival: '00:00' }
];
const hotels = [
    { id: 1, adress: 'Godlike street, 21', city: 'Токио', name: 'Лучшие шпроты' },
    { id: 2, adress: 'Froide street, 21', city: 'Париж', name: 'Отель от Бога' },
    { id: 3, adress: 'Navalniy street, 81', city: 'Нью-Йорк', name: 'Истинный отель' },
    { id: 15, adress: 'Boston street, 98/2', city: 'Москва', name: 'Отель Помойный' },
    { id: 32, adress: 'ул. Кипелова, д. 1', city: 'Балтийск', name: 'Васян' }
];
const visaList = [
    { id: 1, serialNumber: '123 - Cat', date: '248.15.2222', durance: '3 years', ticket_id: 'ser10us1y', hotel_id: 15 },
    { id: 2, serialNumber: '345 - 3ebra', date: '0.0.3012', durance: '3 days', ticket_id: 'ohMy34', hotel_id: 1 },
    { id: 3, serialNumber: '567 - sobaka', date: '12.04.1812', durance: '3 weeks', ticket_id: 'iddqd', hotel_id: 32 },
    { id: 4, serialNumber: '789 - Pes', date: '28.7.2232', durance: '3 eons', ticket_id: 'ja34ja21ja', hotel_id: 2 },
    { id: 4, serialNumber: '91011 - Dino', date: '1.1.2077', durance: 'NaN', ticket_id: 'no3i5man', hotel_id: 3 }
];

async function getTicketWithHelpOfCity(city) {
    return new Promise((resolve, reject) => {
        console.log('начат поиск билетов');
        setTimeout(() => {
            console.log('закончен поиск билетов');
            let success = true;
            if (success) {
                resolve(tickets.find(item => item.city === city));
            } else {
                reject('Ошибка в биллетах');
            }
        }, 1000);
    })
}

async function getHotelWithHelpOfId(id) {
    return new Promise((resolve, reject) => {
        console.log('начат поиск отелей');
        setTimeout(() => {
            console.log('закончен поиск отелей');
            let success = true;
            if (success) {
                resolve(hotels.find(item => item.city === id));
            } else {
                reject('Ошибка в отелях');
            }
        }, 1000);
    })
}

async function takeVisa(id) {
    return new Promise((resolve, reject) => {
        console.log('ищем визу');
        setTimeout(() => {
            console.log('вы нашли визу, досвидания');
            let success = true;
            if (success) {
                resolve(visaList.find(item => item.hotel_id === id));
            } else {
                reject('нет такой визы');
            }
        }, 1000);
    })
}

(async function() {
    let chosen = window.prompt("Введите Город, куда хотете уехать");;
    try {
        let order = Promise.all(await [getTicketWithHelpOfCity(chosen), getHotelWithHelpOfId(chosen)]);
        console.log(await order);
        let visa = await takeVisa((await order)[1].id);
        console.log(visa);
    } catch (err) {
        console.error(err);
    }
})()