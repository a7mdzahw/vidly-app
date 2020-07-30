import _ from "lodash";

function paginate(items, pageNumber, pageSize) {
  const index = pageSize * (pageNumber - 1);
  const newOne = _(items).slice(index).take(pageSize).value();
  return newOne;
}

export default paginate;
