// import { createSlice } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1df173c443msh09a88401904a0f5p174ce8jsn2a97d3e3edce',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};


export const getTopCharts = createAsyncThunk(
  'topCharts/getTopCharts',
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=DZ', options)
    .then(response => response.json())
    .then(response => console.log(response[0]))
    .catch(err => console.error(err))
)


const topChartsSlice = createSlice({
  name: "topCharts",
  initialState: {
    topCharts: [],
    isLoading: false
  },
  extraReducers: {
    // setTopCharts(state, action){
    //   state.topCharts.push(action.payload)
    // }
    [getTopCharts.pending]: (state) => {
      state.isLoading = true
    },
    [getTopCharts.fulfilled]: (state, action) => {
      state.topCharts = action.payload
      state.isLoading = false
    },
    [getTopCharts.rejected]: (state) => {
      state.isLoading = false
    }

  }
})

// export const {getPhotos} = topChartsSlice.actions;
export default topChartsSlice.reducer