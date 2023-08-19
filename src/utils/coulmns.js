import more from '../assets/images/more.svg'
export const customersColumns = [
    {
        title: <span>#<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'id',
    },
    {
        title: <span>Full name<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'fullName',
    },
    {
        title: <span>Email<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'email',
    },
    {
        title: <span>Mobile numbers<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'mobileNumbers',
    },
    {
        title: <span>Account #<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'account',
    },
    {
        title: <span>Status<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'status',
    },
    {
        title: <span>Last Login<img src={more} style={{verticalAlign: 'bottom'}} alt='More' /></span>,
        dataIndex: 'lastLogin'
    }
]