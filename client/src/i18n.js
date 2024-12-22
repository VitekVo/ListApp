import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          topBar: {
            appName: "MrLister",
            createListButton: "Create new list",
            themeDark: "Dark theme",
            themeLight: "Light theme",
            changeProfile: "Change profile",
            selectProfile: "Select profile ->",
          },
          listOverview: {
            myLists: "My lists",
            sharedLists: "Shared with me",
            archivedButtonTrue: "Archived lists",
            archivedButtonFalse: "Not archived lists",
          },
          singleList: {
            host: "Host",
            itemsChecked: "Items checked",
            archiveButton: "Archive",
            unarchiveButton: "Un-archive",
            deleteButton: "Delete",
          },
          listDetail: {
            addItemButton: "Add new item",
            invitedUsersButton: "Invited users",
            itemsFilterTrueButton: "Missing items",
            itemsFilterFalseButton: "All items",
            itemQuantity: "Qty",
          },
          modalsForms: {
            createListModal: {
              enterName: "Enter name for your list",
              enterIds: "You can enter IDs of users you want to invite",
              createButton: "Create list",
            },
            deleteListModal: {
              youSure: "Are you sure you want to delete this list?",
              confirmDelete: "Delete list",
              cancelDelete: "Cancel",
            },
            changeNameModal: {
              enterNewName: "Enter new name for this list",
              confirmChange: "Change name",
            },
            addItemModal: {
              enterItemName: "Enter item name",
              enterQuantity: "Enter quantity",
              addItemButton: "Add item",
            },
            manageUsersModal: {
              guestList: "Guest list",
              enterUserId: "Enter user's ID to add them to this list",
              addUserButton: "Add user",
              removeUserButton: "Remove user",
              leaveListButton: "Leave list",
              userAddedMessage: "User added successfully",
              userAddedFailedMessage: "Failed to add user. Invalid ID.",
              userRemovedMessage: "User removed successfully",
            },
            announceModal: {
              message:
                "This app is hosted on Render and may take a moment to respond after inactivity.",
            },
          },
        },
      },
      cs: {
        translation: {
          topBar: {
            appName: "PanSeznam",
            createListButton: "Vytvořit nový seznam",
            themeDark: "Tmavý režim",
            themeLight: "Světlý režim",
            changeProfile: "Změnit profil",
            selectProfile: "Vyberte profil ->",
          },
          listOverview: {
            myLists: "Moje seznamy",
            sharedLists: "Sdílené se mnou",
            archivedButtonTrue: "Archivované seznamy",
            archivedButtonFalse: "Nearchivované seznamy",
          },
          singleList: {
            host: "Majitel",
            itemsChecked: "Odškrtnuté položky",
            archiveButton: "Archivovat",
            unarchiveButton: "Od-archivovat",
            deleteButton: "Smazat",
          },
          listDetail: {
            addItemButton: "Přidat novou položku",
            invitedUsersButton: "Pozvaní uživatelé",
            itemsFilterTrueButton: "Chybějící položky",
            itemsFilterFalseButton: "Všechny položky",
            itemQuantity: "Počet",
          },
          modalsForms: {
            createListModal: {
              enterName: "Zadejte jméno pro seznam",
              enterIds: "Můžete zadat ID uživatelů, které chcete pozvat",
              createButton: "Vytvořit seznam",
            },
            deleteListModal: {
              youSure: "Opravdu chcete samzat tento seznam?",
              confirmDelete: "Smazat seznam",
              cancelDelete: "Zrušit",
            },
            changeNameModal: {
              enterNewName: "Zadejte nové jméno pro tento seznam",
              confirmChange: "Změnit jméno",
            },
            addItemModal: {
              enterItemName: "Zadejte název položky",
              enterQuantity: "Zadejte množství",
              addItemButton: "Přidat položku",
            },
            manageUsersModal: {
              guestList: "Seznam hostů",
              enterUserId: "Pro přidání uživatele, zadejte jeho ID",
              addUserButton: "Přidat uživatele",
              userAddedFailedMessage: "Failed to add user. Invalid ID.",
              removeUserButton: "Odstranit uživatele",
              leaveListButton: "Opustit seznam",
              userAddedMessage: "Uživatel přidán úspěšně",
              userRemovedMessage: "Uživatel odebrán úspěšně",
            },
            announceModal: {
              message:
                "Tato aplikace je hostována na Renderu a po delší neaktivitě může chvíli trvat, než zareaguje.",
            },
          },
        },
      },
    },
  });

export default i18n;
