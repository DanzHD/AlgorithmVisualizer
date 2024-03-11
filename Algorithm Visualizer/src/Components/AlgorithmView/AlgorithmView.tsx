import "./_algorithmview.scss"

import useArraySortContext from "../../Context/ArraySortContext/useArraySortContext.tsx";
import cx from "classnames";



export default function AlgorithmView() {
    const {resultStates, count} = useArraySortContext()
    function createArrayVisuals(numberArray: number[], comparedNumbers: number[]) {

        return numberArray.map((num: number, index: number) => {
            return (
                <div
                    className={cx(
                        "number",
                            {
                                "number--red": comparedNumbers.includes(index)
                            }
                        )}
                    style={{
                        width: 100 / numberArray.length + "%",
                        height: num + "px"
                    }}
                />
            )
        })

    }


    return (
        <div className="algorithm-view-container">
            <div className="algorithm-view-container__numbers">

                {

                    resultStates.length > 0 && createArrayVisuals(resultStates[count]["numberArray"], resultStates[count]["comparedNumbers"])

                }

            </div>
        </div>
    )
}

