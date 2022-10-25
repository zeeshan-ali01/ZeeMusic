// import { createSlice } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async () => {
    const response = await fetch("https://picsum.photos/v2/list")
    const formatedResponse = await response.json()
    return formatedResponse
  }
)


const topChartsSlice = createSlice({
  name: "topCharts",
  initialState: {
    photos: [],
    isLoading: false
  },
  extraReducers: {
    // setTopCharts(state, action){
    //   state.topCharts.push(action.payload)
    // }
    [getPhotos.pending]: (state) => {
      state.isLoading = true
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload
      state.isLoading = false
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false
    }

  }
})

// export const {getPhotos} = topChartsSlice.actions;
export default topChartsSlice.reducer