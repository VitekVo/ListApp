import React, { useContext, useState } from "react";
import Item from "./Item";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

function ItemOverview() {
  const { t } = useTranslation();
  const { theList, changeItem, removeItem } = useContext(ListDetailContext);
  const [itemFilter, setItemFilter] = useState(true);

  const handleFilter = () => {
    setItemFilter((prevState) => !prevState);
  };

  const filteredItems =
    itemFilter === false
      ? theList.items
      : theList.items.filter((item) => !item.checked);

  const totalItems = theList.items.length;
  const checkedItems = theList.items.filter((item) => item.checked).length;
  const uncheckedItems = totalItems - checkedItems;

  const pieData = {
    labels: ["Checked", "Unchecked"],
    datasets: [
      {
        data: [checkedItems, uncheckedItems],
        backgroundColor: ["#28a745", "#dc3545"],
        hoverBackgroundColor: ["#218838", "#c82333"],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            const label = tooltipItem.label;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="top-section">
        <div className="left-section">
          <div className="filter-button-container">
            <button
              className="btn-primary filter-items"
              onClick={() => handleFilter()}
            >
              {itemFilter
                ? t("listDetail.itemsFilterTrueButton")
                : t("listDetail.itemsFilterFalseButton")}
            </button>
          </div>
        </div>
        <div className="chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
      <div className="item-overview">
        {filteredItems.map((item) => (
          <Item
            key={item._id}
            item={item}
            changeItem={changeItem}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemOverview;
