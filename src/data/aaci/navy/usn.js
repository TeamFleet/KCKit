const { DD_Fletcher } = require('../../ship-classes')

module.exports = {


    /**************************************************************************
     * Fletcher class
     *************************************************************************/

    34: {
        fixed: 7,
        modifier: 1.6,
        icons: ['16:308', '16:308'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_308: 2
        }
    },
    35: {
        fixed: 6,
        modifier: 1.55,
        icons: ['16:308', '16:313'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_308: 1,
            hasID_313: 1
        }
    },
    36: {
        fixed: 6,
        modifier: 1.55,
        icons: ['16:313', '16:313', '11:307'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_313: 2,
            hasID_307: 1
        }
    },
    37: {
        fixed: 4,
        modifier: 1.55,
        icons: ['16:313', '16:313'],
        ship: {
            isClass: DD_Fletcher
        },
        equipments: {
            hasID_313: 2,
        }
    },


}
