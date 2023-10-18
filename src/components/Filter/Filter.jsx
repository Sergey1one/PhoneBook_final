import { setFilter } from "redux/filterSlice"
import { useSelector,useDispatch } from "react-redux";
import { selectFilter } from "redux/selectors";
import { TextField } from "@mui/material";


const Filter = () => {
    const dispatch = useDispatch();
    const filter=useSelector(selectFilter)

    const changeFilter = (e) => {
        const {value} = e.currentTarget;
        dispatch(setFilter(value));
    }

    
    
    return (
      

        <TextField 
            sx={{ m: 1, width: '30ch' , mx:'auto', py:'1' }}
          id="password"
                label="Find contact by name"
                value={filter}
                onChange={changeFilter}
       
        />
   )
}

export default Filter






  // <label> Find contact by name
        //     <input type='text' value={filter} onChange={changeFilter} />
        //     </label>