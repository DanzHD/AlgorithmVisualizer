import "./_algorithmview.scss"
import useArraySortContext from "../../Context/ArraySortContext/useArraySortContext.tsx";

export default function AlgorithmView() {
    const {numberArray}= useArraySortContext();

    return (
        <div className="algorithm-view-container">
            <div className="algorithm-view-container__numbers">

                {
                    numberArray.map((num: number) => {
                        return (
                            <div style={{height: num + 'px', width: 100 / numberArray.length + "%"}} className="number" />
                        )
                    })
                }
            </div>
        </div>
    )
}