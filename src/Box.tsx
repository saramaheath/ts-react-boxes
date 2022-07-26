/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

interface IBoxProps {
  id: string,
  width: string | number,
  height: string | number,
  backgroundColor: string,
  remove: (id: string) => void
}

function Box({
   id,
   width = 5,
   height = 5,
   backgroundColor = 'green',
   remove }: IBoxProps) {

  console.log('props', id, width, height, backgroundColor, remove)
  /** Remove a box. */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
