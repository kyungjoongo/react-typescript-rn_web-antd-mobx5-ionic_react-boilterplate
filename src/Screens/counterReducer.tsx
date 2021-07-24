// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const INCREMENT_5 = 'counter/INCREMENT_5';
const SET_RESULT = 'setResult'

// 액션 생성 함수 정의
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const decrement5 = () => ({type: INCREMENT_5});
export const setResult = (arrList: any) => ({
    type: SET_RESULT,
    payload: arrList

});

// 초기 상태 정의
const initialState = {
    number: 0,
    results: [],
};

//todo: 리듀서 작성
export default function CounterReducer(state = initialState, action: any) {
    console.info("payload====>", action.payload);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };

        case SET_RESULT:
            return {
                ...state,//기본 스테이트 유지하고
                results: action.payload
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };

        case INCREMENT_5:
            return {
                ...state,
                number: state.number + 5,
            };
        default:
            return state;
    }
}
