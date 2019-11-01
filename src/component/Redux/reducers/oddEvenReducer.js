import {CHECK_ODDEVEN} from '../actions/types';

const initState = { 
    //inisialisasi state cities array null
    numbers: []
};

const oddEvenReducer = (state = initState, action) => {
    switch(action.type){
        case CHECK_ODDEVEN:
            if(parseInt(action.payload)%2 === 0){
                return{
                    numbers: state.numbers.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'bilangan Genap'
                        }
                    )
                }
            }else if(parseInt(action.payload)%2 == 1 ){
                return{
                    numbers: state.numbers.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'bilangan Ganjil'
                        }
                    )
                }
            }else{
               return{
                    numbers: state.numbers.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'bukan angka'
                        }
                    )
                }
            }
        default: 
            return state;
    }
}

export default oddEvenReducer;