const initialState = {
  sushis: [],
  sushiSelected: [],
  amountSpent: 0,
  amount: 100

}

const reducer = (state = initialState, action) =>{
 if(action.type === "SET_SUSHIS"){
   return {
     ...state,
     sushis: action.payload.sushis
   }
 }else if (action.type === "SET_SELECTED_SUSHI"){
   return{
     ...state,
     sushiSelected: [...state.sushiSelected, action.payload.sushi],
     amount: state.amount - action.payload.sushi.price,
     amountSpent: state.amountSpent + action.payload.sushi.price

   }
 }

  return state 
}

export default reducer;