const SearchBar = () => {
    return(
        <div>
            <form>
                <select name="select" multiple>
                    <option>europa</option>
                    <option>asia</option>
                    <option>america</option>
                    <option>oceania</option>
                </select>
            </form>
        </div>
    )
}

export default SearchBar

// const Option = (props) => {
//     return (
//       <div>
//         <components.Option {...props}>
//           <input
//             type="checkbox"
//             checked={props.isSelected}
//             onChange={() => null}
//           />{" "}
//           <label>{props.label}</label>
//         </components.Option>
//       </div>
//     );
//   };