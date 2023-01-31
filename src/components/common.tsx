import React from "react";
import { Link } from "react-router-dom";
import { IApiListItem, IApiListResult } from "../hooks/api.interfaces";

export interface IListViewProps {
  source: string;
  items: Array<IApiListItem>;
}
export interface IListViewItemProps {
  source: string;
  item: IApiListItem;
  index: number;
}

export const ListViewItem = ({ source, item, index }: IListViewItemProps) => {
  return (
    <div className="flex space-x-2 items-center">
      <Link
        className="bg-gray-200 font-semibold text-yellow-600 px-3 rounded-md cursor-pointer hover:bg-yellow-500 hover:text-gray-100"
        to={`/${source}/${index + 1}/detail`}
        key={index}
      >
        Ver
      </Link>
      <h2>{item.name}</h2>
    </div>
  );
};
export const ListView = ({ source, items }: IListViewProps) => {
  return (
    <React.Fragment>
      <p className="text-2xl pb-8">Listado</p>
      <ul className="flex flex-col pt-4 space-y-1">
        {items &&
          items.map((item, index: number) => {
            return (
              <ListViewItem
                key={index}
                source={source}
                item={item}
                index={index}
              />
            );
          })}
      </ul>
    </React.Fragment>
  );
};
