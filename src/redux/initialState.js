export const initialState = {
  user: {
    id: 1,
    auth: true,
    admin: false,
  },
  posts: {
    data: [
      {
        id: 1,
        status: 'published',
        title: 'sell old c64',
        content: 'I have for sell, old personal computer commodore c64, state is very good, incl. power supp, dataCassette, joystick, big collect. game, blackBox v3',
        price: 300,
        photo: 'https://1.bp.blogspot.com/-ZWBSUf4woGY/VZZEfQTGxwI/AAAAAAAAARQ/PuQvo3rBdwU/s1600/c64gAldi.jpg',
        category: 'IT',
        date: '12.06.2020',
        dateActualisation: '13.07.2020',
        email: 'xyz@abc.com',
        userId: 1
      },

      {
        id: 2,
        status: 'published',
        title: 'sell camera',
        content: 'for sell camera nikon d5, little used, current warranty for 1 year. in set body, kit lens, cables, memory card, software. More info only mail  ',
        price: 9000,
        photo: 'https://cdn.nikoneurope.com/imported/images/web/EU/products/digital-cameras/dslr/d5/nikon_dslr_d5_front_left--original.png',
        category: 'IT',
        date: '21.03.2020',
        dateActualisation: '13.04.2020',
        email: 'mrX@xza.com',
        userId: 2
      },
      {
        id: 3,
        status: 'published',
        title: 'sell tv',
        content: 'I have for sell tv lcd, params: 40", smart tv, wifi ',
        price: 300,
        photo: 'https://1.bp.blogspot.com/-ZWBSUf4woGY/VZZEfQTGxwI/AAAAAAAAARQ/PuQvo3rBdwU/s1600/c64gAldi.jpg',
        category: 'IT',
        date: '12.06.2020',
        dateActualisation: '13.07.2020',
        email: 'xyz@abc.com',
        userId: 1
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
