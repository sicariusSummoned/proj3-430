"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleArmy = function handleArmy(e) {
  e.preventDefault();

  $("domoMessage").animate({ width: 'hide' }, 350);

  if ($("#listName").val() == '' || $("#listPoints").val() == '') {
    handleError("All fields are required!");
    return false;
  }

  sendAjax('POST', $("#armyForm").attr("action"), $("#armyForm").serialize(), function () {
    loadArmiesFromServer();
  });
};

var handleDetachment = function handleDetachment(e) {
  e.preventDefault();

  $("domoMessage").animate({ width: 'hide' }, 350);

  if ($("#detachmentType").val() == '' || $("#detachmentPoints").val() == '') {
    handleError("All fields are required!");
    return false;
  }
  console.dir($("#detachmentForm").attr("action"));

  sendAjax('POST', $("#detachmentForm").attr("action"), $("#detachmentForm").serialize(), function () {
    loadDetachmentsFromServer();
  });
};

var handleUnit = function handleUnit(e) {
  e.preventDefault();

  $("domoMessage").animate({ width: 'hide' }, 350);

  if ($("unitName").val() == '' || $("#unitType").val() == '' || $("#unitPoints").val() == '') {
    handleError("All fields are required!");
    return false;
  }

  sendAjax('POST', $("#unitForm").attr("action"), $("#unitForm").serialize(), function () {
    loadUnitsFromServer();
  });
};

var handleModel = function handleModel(e) {
  e.preventDefault();

  $("domoMessage").animate({ width: 'hide' }, 350);

  if ($("modelName").val() == '' || $("#modelPoints").val() == '' || $("#modelQuantity").val() == '') {
    handleError("All fields are required!");
    return false;
  }

  sendAjax('POST', $("#modelForm").attr("action"), $("#modelForm").serialize(), function () {
    loadModelsFromServer();
  });
};

var ArmyForm = function ArmyForm(props) {
  return React.createElement(
    "form",
    { id: "armyForm",
      onSubmit: handleArmy,
      name: "armyForm",
      action: "/maker",
      method: "POST",
      className: "armyForm"
    },
    React.createElement(
      "label",
      { htmlFor: "listName" },
      "List Name: "
    ),
    React.createElement("input", { id: "listName", type: "text", name: "listName", placeholder: "My List" }),
    React.createElement(
      "label",
      { htmlFor: "listFaction" },
      "Keyword: "
    ),
    React.createElement(
      "select",
      { id: "listFaction", name: "listFaction" },
      React.createElement(
        "option",
        { value: "Imperium", selected: true },
        "Imperium"
      ),
      React.createElement(
        "option",
        { value: "Tyranid" },
        "Tyranid"
      ),
      React.createElement(
        "option",
        { value: "Dark Eldar" },
        "Dark Eldar"
      ),
      React.createElement(
        "option",
        { value: "Ork" },
        "Ork"
      ),
      React.createElement(
        "option",
        { value: "Chaos" },
        "Chaos"
      ),
      React.createElement(
        "option",
        { value: "Eldar" },
        "Eldar"
      ),
      React.createElement(
        "option",
        { value: "Tau" },
        "Tau"
      ),
      React.createElement(
        "option",
        { value: "Necron" },
        "Necron"
      )
    ),
    React.createElement(
      "label",
      { htmlFor: "listArmy" },
      "Army: "
    ),
    React.createElement(
      "select",
      { id: "listArmy", name: "listArmy" },
      React.createElement(
        "option",
        { value: "Space Marines", selected: true },
        "Space Marines"
      ),
      React.createElement(
        "option",
        { value: "Ultramarines" },
        "Ultramarines"
      ),
      React.createElement(
        "option",
        { value: "Space Wolves" },
        "Space Wolves"
      ),
      React.createElement(
        "option",
        { value: "Dark Angels" },
        "Dark Angels"
      ),
      React.createElement(
        "option",
        { value: "Blood Angels" },
        "Blood Angels"
      ),
      React.createElement(
        "option",
        { value: "Chaos Space Marines" },
        "Chaos Space Marines"
      ),
      React.createElement(
        "option",
        { value: "Death Guard" },
        "Death Guard"
      ),
      React.createElement(
        "option",
        { value: "Chaos Demons" },
        "Chaos Demons"
      ),
      React.createElement(
        "option",
        { value: "Dark Eldar" },
        "Dark Eldar"
      ),
      React.createElement(
        "option",
        { value: "Eldar" },
        "Eldar"
      ),
      React.createElement(
        "option",
        { value: "Harlequins" },
        "Harlequins"
      ),
      React.createElement(
        "option",
        { value: "Necrons" },
        "Necrons"
      ),
      React.createElement(
        "option",
        { value: "Orks" },
        "Orks"
      ),
      React.createElement(
        "option",
        { value: "Tau" },
        "Tau"
      ),
      React.createElement(
        "option",
        { value: "Tyranids" },
        "Tyranids"
      ),
      React.createElement(
        "option",
        { value: "Imperial Guard" },
        "Imperial Guard"
      ),
      React.createElement(
        "option",
        { value: "Death Korps" },
        "Death Korps"
      ),
      React.createElement(
        "option",
        { value: "Militarum Tempestus" },
        "Militarum Tempestus"
      ),
      React.createElement(
        "option",
        { value: "Genestealer Cults" },
        "Genestealer Cults"
      ),
      React.createElement(
        "option",
        { value: "Sisters of Battle" },
        "Sisters of Battle"
      ),
      React.createElement(
        "option",
        { value: "Skitarii" },
        "Skitarii"
      ),
      React.createElement(
        "option",
        { value: "Cult Mechanicus" },
        "Cult Mechanicus"
      )
    ),
    React.createElement(
      "label",
      { htmlFor: "listSubFaction" },
      "SubFaction: "
    ),
    React.createElement("input", { id: "listSubFaction", type: "text", name: "listSubFaction" }),
    React.createElement(
      "label",
      { htmlFor: "listPoints" },
      "Points: "
    ),
    React.createElement("input", { id: "listPoints", type: "text", name: "listPoints", placeholder: "1000" }),
    React.createElement(
      "label",
      { htmlFor: "listPower" },
      "Power: "
    ),
    React.createElement("input", { id: "listPower", type: "text", name: "listPower", placeholder: "58" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "makeArmySubmit", type: "submit", value: "Make Army" })
  );
};

var DetachmentForm = function DetachmentForm(props) {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return React.createElement(
    "form",
    { id: "detachmentForm",
      onSubmit: handleDetachment,
      name: "detachmentForm",
      action: "/detachments/" + ownerString,
      method: "POST",
      className: "detachmentForm"
    },
    React.createElement(
      "label",
      { htmlFor: "detachmentType" },
      "Detachment Type: "
    ),
    React.createElement(
      "select",
      { id: "detachmentType", name: "detachmentType" },
      React.createElement(
        "option",
        { value: "patrol", selected: true },
        "Patrol Detachment"
      ),
      React.createElement(
        "option",
        { value: "battalion" },
        "Battalion Detachment"
      ),
      React.createElement(
        "option",
        { value: "brigade" },
        "Brigade Detachment"
      ),
      React.createElement(
        "option",
        { value: "vanguard" },
        "Vanguard Detachment"
      ),
      React.createElement(
        "option",
        { value: "spearhead" },
        "Spearhead Detachment"
      ),
      React.createElement(
        "option",
        { value: "outrider" },
        "Outrider Detachment"
      ),
      React.createElement(
        "option",
        { value: "command" },
        "Supreme Command Detachment"
      ),
      React.createElement(
        "option",
        { value: "superheavy" },
        "Super-Heavy Detachment"
      ),
      React.createElement(
        "option",
        { value: "superheavyauxiliary" },
        "Super-Heavy Auxiliary Detachment"
      ),
      React.createElement(
        "option",
        { value: "airwing" },
        "Air Wing Detachment"
      ),
      React.createElement(
        "option",
        { value: "fortification" },
        "Fortification Network"
      ),
      React.createElement(
        "option",
        { value: "support" },
        "Auxiliary Support Detachments"
      )
    ),
    React.createElement(
      "label",
      { htmlFor: "detachmentPoints" },
      "Detachment Points: "
    ),
    React.createElement("input", { id: "detachmentPoints", type: "text", name: "detachmentPoints", placeholder: "100" }),
    React.createElement(
      "label",
      { htmlFor: "detachmentPower" },
      "Detachment Power: "
    ),
    React.createElement("input", { id: "detachmentPower", type: "text", name: "detachmentPower", placeholder: "0" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "makeDetachmentSubmit", type: "submit", value: "Make Detachment" })
  );
};

var UnitForm = function UnitForm(props) {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return React.createElement(
    "form",
    { id: "unitForm",
      onSubmit: handleUnit,
      name: "unitForm",
      action: "/units/" + ownerString,
      method: "POST",
      className: "unitForm"
    },
    React.createElement(
      "label",
      { htmlFor: "unitName" },
      "Unit Name: "
    ),
    React.createElement("input", { id: "unitName", type: "text", name: "unitName", placeholder: "Infantry Squad" }),
    React.createElement(
      "label",
      { htmlFor: "unitType" },
      "Unit Type: "
    ),
    React.createElement(
      "select",
      { id: "unitType", name: "unitType" },
      React.createElement(
        "option",
        { value: "hq" },
        "HQ"
      ),
      React.createElement(
        "option",
        { value: "troop" },
        "Troops"
      ),
      React.createElement(
        "option",
        { value: "elite" },
        "Elites"
      ),
      React.createElement(
        "option",
        { value: "fastattack" },
        "Fast Attack"
      ),
      React.createElement(
        "option",
        { value: "heavysupport" },
        "Heavy Support"
      ),
      React.createElement(
        "option",
        { value: "flyer" },
        "Flyers"
      ),
      React.createElement(
        "option",
        { value: "dedicatedtransport" },
        "Dedicated Transport"
      ),
      React.createElement(
        "option",
        { value: "lordofwar" },
        "Lords of War"
      ),
      React.createElement(
        "option",
        { value: "fortification" },
        "Fortifications"
      )
    ),
    React.createElement(
      "label",
      { htmlFor: "unitPoints" },
      "Unit Points: "
    ),
    React.createElement("input", { id: "unitPoints", type: "text", name: "unitPoints", placeholder: "100" }),
    React.createElement(
      "label",
      { htmlFor: "unitPower" },
      "Unit Power: "
    ),
    React.createElement("input", { id: "unitPower", type: "text", name: "unitPower", placeholder: "3" }),
    React.createElement(
      "label",
      { htmlFor: "unitUpgrades" },
      "Unit Upgrades: "
    ),
    React.createElement("input", { id: "unitUpgrades", type: "text", name: "unitUpgrades", placeholder: "none" }),
    React.createElement(
      "label",
      { htmlFor: "unitUpgradesCost" },
      "Upgrade Costs: "
    ),
    React.createElement("input", { id: "unitUpgradesCost", type: "text", name: "unitUpgradesCost", placeholder: "0" }),
    React.createElement(
      "label",
      { htmlFor: "unitSpecialRules" },
      "Special Rules: "
    ),
    React.createElement("input", { id: "unitSpecialRules", type: "text", name: "unitSpecialRules", placeholder: "Infantry" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "makeUnitSubmit", type: "submit", value: "Make Unit" })
  );
};

var ModelForm = function ModelForm(props) {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return React.createElement(
    "form",
    { id: "modelForm",
      onSubmit: handleModel,
      name: "modelForm",
      action: "/models/" + ownerString,
      method: "POST",
      className: "modelForm"
    },
    React.createElement(
      "label",
      { htmlFor: "modelName" },
      "Model Name: "
    ),
    React.createElement("input", { id: "modelName", type: "text", name: "modelName", placeholder: "Guardsman" }),
    React.createElement(
      "label",
      { htmlFor: "modelStats" },
      "Model Stats: "
    ),
    React.createElement("input", { id: "modelStats", type: "text", name: "modelStats", placeholder: "Bs4+ Ws4+ W1 S3 T3 Ld7 Sv5+" }),
    React.createElement(
      "label",
      { htmlFor: "modelPoints" },
      "Model Points: "
    ),
    React.createElement("input", { id: "modelPoints", type: "text", name: "modelPoints", placeholder: "0" }),
    React.createElement(
      "label",
      { htmlFor: "modelQuantity" },
      "Model Quantity: "
    ),
    React.createElement("input", { id: "modelQuantity", type: "text", name: "modelQuantity", placeholder: "9" }),
    React.createElement(
      "label",
      { htmlFor: "modelupgrades" },
      "Model Upgrades: "
    ),
    React.createElement("input", { id: "modelUpgrades", type: "text", name: "modelUpgrades", placeholder: "Lasgun CCW Frags" }),
    React.createElement(
      "label",
      { htmlFor: "modelUpgradesCost" },
      "Upgrade Costs: "
    ),
    React.createElement("input", { id: "modelUpgradesCost", type: "text", name: "modelUpgradesCost", placeholder: "0" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "makeModelSubmit", type: "submit", value: " Make Model" })
  );
};

var ArmyList = function ArmyList(props) {
  if (props.armies.length === 0) {
    return React.createElement(
      "div",
      { className: "armyList" },
      React.createElement(
        "h3",
        { className: "emptyArmy" },
        "Make a List!"
      )
    );
  }

  var armyNodes = props.armies.map(function (army) {
    var _React$createElement, _React$createElement2;

    var factionIconString = "/assets/img/armies/";
    var codexIconString = "/assets/img/armies/";

    /**
    <option value="Imperium" selected>Imperium</option>
    <option value="Tyranid">Tyranid</option>
    <option value="Dark Eldar">Dark Eldar</option>
    <option value="Ork">Ork</option>
    <option value="Chaos">Chaos</option>
    <option value="Eldar">Eldar</option>
    <option value="Tau">Tau</option>
    <option value="Necron">Necron</option>
    **/

    switch (army.listFaction) {
      case 'Imperium':
        factionIconString += 'imperium.png';
        break;
      case 'Tyranid':
        factionIconString += 'tyranid.png';
        break;
      case 'Dark Eldar':
        factionIconString += 'darkeldar.png';
        break;
      case 'Ork':
        factionIconString += 'ork.png';
        break;
      case 'Chaos':
        factionIconString += 'chaosdemons.png';
        break;
      case 'Eldar':
        factionIconString += 'eldar.png';
        break;
      case 'Tau':
        factionIconString += 'tau.png';
        break;
      case 'Necron':
        factionIconString += 'necron.png';
        break;
      default:
        factionIconString += 'imperium.png';
        break;
    }
    /**
        <option value="Space Marines"selected>Space Marines</option>
        <option value="Ultramarines">Ultramarines</option>
        <option value="Space Wolves">Space Wolves</option>
        <option value="Dark Angels">Dark Angels</option>
        <option value="Blood Angels">Blood Angels</option>
        <option value="Chaos Space Marines">Chaos Space Marines</option>
        <option value="Death Guard">Death Guard</option>
        <option value="Chaos Demons">Chaos Demons</option>
        <option value="Dark Eldar">Dark Eldar</option>
        <option value="Eldar">Eldar</option>
        <option value="Harlequins">Harlequins</option>
        <option value="Necrons">Necrons</option>
        <option value="Orks">Orks</option>
        <option value="Tau">Tau</option>
        <option value="Tyranids">Tyranids</option>
        <option value="Imperial Guard">Imperial Guard</option>
        <option value="Death Korps">Death Korps</option>
        <option value="Militarum Tempestus">Militarum Tempestus</option>
        <option value="Genestealer Cults">Genestealer Cults</option>
        <option value="Sisters of Battle">Sisters of Battle</option>
        <option value="Skitarii">Skitarii</option>
        <option value="Cult Mechanicus">Cult Mechanicus</option>    
    **/

    switch (army.listArmy) {
      case "Space Marines":
        codexIconString += "spacemarines.png";
        break;
      case "Ultramarines":
        codexIconString += "ultramarines.png";
        break;
      case "Space Wolves":
        codexIconString += "spacewolves.png";
        break;
      case "Dark Angels":
        codexIconString += "darkangels.png";
        break;
      case "Blood Angels":
        codexIconString += "bloodangels.png";
        break;
      case "Chaos Space Marines":
        codexIconString += "chaosspacemarines.png";
        break;
      case "Death Guard":
        codexIconString += "deathguard.png";
        break;
      case "Chaos Demons":
        codexIconString += "chaosdemons.png";
        break;
      case "Dark Eldar":
        codexIconString += "darkeldar.png";
        break;
      case "Eldar":
        codexIconString += "eldar.png";
        break;
      case "Harlequins":
        codexIconString += "harlequin.png";
        break;
      case "Necrons":
        codexIconString += "necron.png";
        break;
      case "Orks":
        codexIconString += "ork.png";
        break;
      case "Tau":
        codexIconString += "tau.png";
        break;
      case "Tyranids":
        codexIconString += "tyranid.png";
        break;
      case "Imperial Guard":
        codexIconString += "imperialguard.png";
        break;
      case "Death Korps":
        codexIconString += "deathkorps.jpeg";
        break;
      case "Militarum Tempestus":
        codexIconString += "militarumtempestus.png";
        break;
      case "Genestealer Cults":
        codexIconString += "tyranid.png";
        break;
      case "Sisters of Battle":
        codexIconString += "sistersofbattle.jpeg";
        break;
      case "Skitarii":
        codexIconString += "skitarii.png";
        break;
      case "Cult Mechanicus":
        codexIconString += "cultmechanicus.png";
        break;
      default:
        codexIconString += 'spacemarines.png';
        break;
    }

    return React.createElement(
      "div",
      { key: army._id, className: "army" },
      React.createElement(
        "h3",
        { className: "listName" },
        army.listName
      ),
      React.createElement(
        "div",
        { className: "itemContent" },
        React.createElement(
          "h3",
          { className: "listFaction" },
          "Keyword: ",
          army.listFaction,
          React.createElement("img", { className: "factionIcon", src: factionIconString })
        ),
        React.createElement(
          "h3",
          { className: "listArmy" },
          "Codex: ",
          army.listArmy,
          React.createElement("img", { className: "codexIcon", src: codexIconString })
        ),
        React.createElement(
          "h3",
          { className: "listSubFaction" },
          "Doctrines: ",
          army.listSubFaction
        )
      ),
      React.createElement(
        "div",
        { className: "itemPointsPower" },
        React.createElement(
          "h3",
          { className: "listPoints" },
          "Points: ",
          army.listPoints
        ),
        React.createElement(
          "h3",
          { className: "listPower" },
          "Power: ",
          army.listPower
        )
      ),
      React.createElement(
        "div",
        { className: "itemImages" },
        React.createElement(
          "a",
          (_React$createElement = { className: "armyId" }, _defineProperty(_React$createElement, "className", "deleteImg"), _defineProperty(_React$createElement, "href", "/delete/" + army._id), _React$createElement),
          React.createElement("img", { src: "/assets/img/minus.png" })
        ),
        React.createElement(
          "a",
          (_React$createElement2 = { className: "armyId" }, _defineProperty(_React$createElement2, "className", "addImg"), _defineProperty(_React$createElement2, "href", "/detachments/" + army._id), _React$createElement2),
          React.createElement("img", { src: "/assets/img/plus.png" })
        )
      )
    );
  });

  return React.createElement(
    "div",
    { className: "armyList" },
    armyNodes
  );
};

var DetachmentList = function DetachmentList(props) {
  if (props.detachments.length === 0) {
    return React.createElement(
      "div",
      { className: "detachmentList" },
      React.createElement(
        "h3",
        { className: "emptyDetachment" },
        "Add a Detachment!"
      )
    );
  }

  var detachmentNodes = props.detachments.map(function (detachment) {
    var _React$createElement3, _React$createElement4;

    console.dir(detachment);

    var ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);

    var detachmentIconString = "/assets/img/detachments/";

    /**
        <option value="patrol" selected>Patrol Detachment</option>
        <option value="battalion">Battalion Detachment</option>
        <option value="brigade">Brigade Detachment</option>
        <option value="vanguard">Vanguard Detachment</option>
        <option value="spearhead">Spearhead Detachment</option>
        <option value="outrider">Outrider Detachment</option>
        <option value="command">Supreme Command Detachment</option>
        <option value="superheavy">Super-Heavy Detachment</option>
        <option value="airwing">Air Wing Detachment</option>
        <option value="fortification">Fortification Network</option>
        <option value="support">Auxiliary Support Detachments</option>   
    **/

    switch (detachment.detachmentType) {
      case "patrol":
        detachmentIconString += "patrolDetachment.png";
        break;
      case "battalion":
        detachmentIconString += "battalionDetachment.png";
        break;
      case "brigade":
        detachmentIconString += "brigadeDetachment.png";
        break;
      case "vanguard":
        detachmentIconString += "vanguardDetachment.png";
        break;
      case "spearhead":
        detachmentIconString += "spearheadDetachment.png";
        break;
      case "outrider":
        detachmentIconString += "outriderDetachment.png";
        break;
      case "command":
        detachmentIconString += "supremecommandDetachment.png";
        break;
      case "superheavy":
        detachmentIconString += "superheavyDetachment.png";
        break;
      case "superheavyauxiliary":
        detachmentIconString += "superheavyauxiliaryDetachment.png";
        break;
      case "airwing":
        detachmentIconString += "airwingDetachment.png";
        break;
      case "fortification":
        detachmentIconString += "fortificationNetwork.png";
        break;
      case "support":
        detachmentIconString += "auxiliarysupportDetachment.png";
        break;
      default:
        detachmentIconString += "patrolDetachment.png";
        break;
    }

    return React.createElement(
      "div",
      { key: detachment._id, className: "detachment" },
      React.createElement("img", { id: "detachmentIcon", className: "detachmentIcon", src: detachmentIconString }),
      React.createElement(
        "div",
        { className: "itemPointsPower" },
        React.createElement(
          "h3",
          { className: "detachmentPoints" },
          "Points: ",
          detachment.detachmentPoints
        ),
        React.createElement(
          "h3",
          { className: "detachmentPower" },
          "Power: ",
          detachment.detachmentPower
        )
      ),
      React.createElement(
        "div",
        { className: "itemImages" },
        React.createElement(
          "a",
          (_React$createElement3 = { className: "detachmentId" }, _defineProperty(_React$createElement3, "className", "deleteImg"), _defineProperty(_React$createElement3, "href", "/deleteDetachment/" + detachment._id + '/' + ownerString), _React$createElement3),
          React.createElement("img", { src: "/assets/img/minus.png" })
        ),
        React.createElement(
          "a",
          (_React$createElement4 = { className: "detachmentId" }, _defineProperty(_React$createElement4, "className", "addImg"), _defineProperty(_React$createElement4, "href", "/units/" + detachment._id), _React$createElement4),
          React.createElement("img", { src: "/assets/img/plus.png" })
        )
      )
    );
  });
  return React.createElement(
    "div",
    { className: "detachmentList" },
    detachmentNodes
  );
};

var UnitList = function UnitList(props) {
  if (props.units.length === 0) {
    return React.createElement(
      "div",
      { className: "unitList" },
      React.createElement(
        "h3",
        { className: "emptyUnit" },
        "Add a Unit!"
      )
    );
  }

  var unitNodes = props.units.map(function (unit) {
    var _React$createElement5, _React$createElement6;

    console.dir(unit);

    var ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);

    var unitTypeIconString = "/assets/img/units/";

    /**
    <option value="hq">HQ</option>
    <option value="troop">Troops</option>
    <option value="elite">Elites</option>
    <option value="fastattack">Fast Attack</option>
    <option value="heavysupport">Heavy Support</option>
    <option value="flyer">Flyers</option>
    <option value="dedicatedtransport">Dedicated Transport</option>
    <option value="lordofwar">Lords of War</option>
    <option value="fortification">Fortifications</option>    
    **/

    switch (unit.unitType) {
      case "hq":
        unitTypeIconString += "hq.png";
        break;
      case "troop":
        unitTypeIconString += "troop.png";
        break;
      case "elite":
        unitTypeIconString += "elite.png";
        break;
      case "fastattack":
        unitTypeIconString += "fastattack.png";
        break;
      case "heavysupport":
        unitTypeIconString += "heavySupport.png";
        break;
      case "flyer":
        unitTypeIconString += "flyer.png";
        break;
      case "dedicatedtransport":
        unitTypeIconString += "dedicatedtransport.png";
        break;
      case "lordofwar":
        unitTypeIconString += "lordofwar.png";
        break;
      case "fortification":
        unitTypeIconString += "fortification.png";
        break;
      default:
        unitTypeIconString += "troop.png";
        break;
    }

    return React.createElement(
      "div",
      { key: unit._id, className: "unit" },
      React.createElement(
        "h3",
        { className: "unitName" },
        unit.unitName
      ),
      React.createElement(
        "div",
        { className: "itemContent" },
        React.createElement(
          "h3",
          { className: "unitType" },
          React.createElement("img", { id: "unitTypeIcon", src: unitTypeIconString })
        ),
        React.createElement(
          "h3",
          { className: "unitUpgrades" },
          "Upgrades: ",
          unit.unitUpgrades
        ),
        React.createElement(
          "h3",
          { className: "unitUpgradesCost" },
          "Upgrades Cost: ",
          unit.unitUpgradesCost
        ),
        React.createElement(
          "h3",
          { className: "unitSpecialRules" },
          "Special Rules: ",
          unit.unitSpecialRules
        )
      ),
      React.createElement(
        "div",
        { className: "itemPointsPower" },
        React.createElement(
          "h3",
          { className: "unitPoints" },
          "Points: ",
          unit.unitPoints
        ),
        React.createElement(
          "h3",
          { className: "unitPower" },
          "Power: ",
          unit.unitPower
        )
      ),
      React.createElement(
        "div",
        { className: "itemImages" },
        React.createElement(
          "a",
          (_React$createElement5 = { className: "unitId" }, _defineProperty(_React$createElement5, "className", "deleteImg"), _defineProperty(_React$createElement5, "href", "/deleteUnit/" + unit._id + '/' + ownerString), _React$createElement5),
          React.createElement("img", { src: "/assets/img/minus.png" })
        ),
        React.createElement(
          "a",
          (_React$createElement6 = { className: "unitId" }, _defineProperty(_React$createElement6, "className", "addImg"), _defineProperty(_React$createElement6, "href", "/models/" + unit._id), _React$createElement6),
          React.createElement("img", { src: "/assets/img/plus.png" })
        )
      )
    );
  });
  return React.createElement(
    "div",
    { className: "unitList" },
    unitNodes
  );
};

var ModelList = function ModelList(props) {
  if (props.models.length === 0) {
    return React.createElement(
      "div",
      { className: "modelList" },
      React.createElement(
        "h3",
        { className: "emptyModel" },
        "Add a Model!"
      )
    );
  }

  var modelNodes = props.models.map(function (model) {
    var _React$createElement7;

    console.dir(model);

    var ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);

    return React.createElement(
      "div",
      { key: model._id, className: "model" },
      React.createElement(
        "h3",
        { className: "modelName" },
        model.modelGnome
      ),
      React.createElement(
        "div",
        { className: "itemContent" },
        React.createElement(
          "h3",
          { className: "modelStats" },
          "Stats: ",
          model.modelStats
        ),
        React.createElement(
          "h3",
          { className: "modelQuantity" },
          "#: ",
          model.modelQuantity
        ),
        React.createElement(
          "h3",
          { className: "modelUpgrades" },
          "Upgrades: ",
          model.modelUpgrades
        ),
        React.createElement(
          "h3",
          { className: "modelUpgradesCost" },
          "Upgrades Cost: ",
          model.modelUpgradesCost
        )
      ),
      React.createElement(
        "div",
        { className: "itemPointsPower" },
        React.createElement(
          "h3",
          { className: "modelPoints" },
          "Points: ",
          model.modelPoints
        )
      ),
      React.createElement(
        "div",
        { className: "itemImages" },
        React.createElement(
          "a",
          (_React$createElement7 = { className: "modelId" }, _defineProperty(_React$createElement7, "className", "deleteImg"), _defineProperty(_React$createElement7, "href", "/deleteModel/" + model._id + '/' + ownerString), _React$createElement7),
          React.createElement("img", { src: "/assets/img/minus.png" })
        )
      )
    );
  });
  return React.createElement(
    "div",
    { className: "modelList" },
    modelNodes
  );
};

var loadArmiesFromServer = function loadArmiesFromServer() {
  sendAjax('GET', '/getArmies', null, function (data) {
    console.log('loading armies from server:');
    console.dir(data.armies);
    ReactDOM.render(React.createElement(ArmyList, { armies: data.armies }), document.querySelector("#armies"));
  });
};

var loadDetachmentsFromServer = function loadDetachmentsFromServer() {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  var fullString = '/getDetachments/' + ownerString;

  sendAjax('GET', fullString, null, function (data) {
    console.log('loading detachments from server:');
    console.dir(data.detachments);
    ReactDOM.render(React.createElement(DetachmentList, { detachments: data.detachments }), document.querySelector("#armies"));
  });
};

var loadUnitsFromServer = function loadUnitsFromServer() {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  var fullString = '/getUnits/' + ownerString;

  sendAjax('GET', fullString, null, function (data) {
    console.log('loading units from server:');
    console.dir(data.units);
    ReactDOM.render(React.createElement(UnitList, { units: data.units }), document.querySelector("#armies"));
  });
};

var loadModelsFromServer = function loadModelsFromServer() {
  var ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  var fullString = '/getModels/' + ownerString;

  sendAjax('GET', fullString, null, function (data) {
    console.log('loading models from server:');
    console.dir(data.models);
    ReactDOM.render(React.createElement(ModelList, { models: data.models }), document.querySelector("#armies"));
  });
};

var handlePassChange = function handlePassChange(e) {
  e.preventDefault();

  $("#domoMessage").animate({ width: 'hide' }, 350);

  if ($("#oldpass").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
    handleError("ERROR! Missing data detected!");
    return false;
  }

  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("ERROR! Passwords must match!");
    return false;
  }

  sendAjax('POST', $("#passchangeForm").attr("action"), $("#passchangeForm").serialize(), redirect);

  return false;
};

var PasschangeWindow = function PasschangeWindow(props) {
  return React.createElement(
    "form",
    {
      id: "passchangeForm",
      name: "passchangeForm",
      onSubmit: handlePassChange,
      action: "/changepass",
      method: "POST",
      className: "mainForm"
    },
    React.createElement(
      "label",
      { htmlFor: "oldpass" },
      "Old Password: "
    ),
    React.createElement("input", { id: "oldpass", type: "text", name: "oldpass", placeholder: "old password" }),
    React.createElement(
      "label",
      { htmlFor: "pass" },
      "Password: "
    ),
    React.createElement("input", { id: "pass", type: "password", name: "pass", placeholder: "password" }),
    React.createElement(
      "label",
      { htmlFor: "pass2" },
      "Password: "
    ),
    React.createElement("input", { id: "pass2", type: "password", name: "pass2", placeholder: "retype password" }),
    React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
    React.createElement("input", { className: "formSubmit", type: "submit", value: "Change" })
  );
};

var createPasschangeWindow = function createPasschangeWindow(csrf) {
  ReactDOM.render(React.createElement(PasschangeWindow, { csrf: csrf }), document.querySelector("#content"));
};

var setup = function setup(csrf) {
  var passchangeButton = document.querySelector("#passchangeButton");

  switch (page) {
    case 'detachments':
      ReactDOM.render(React.createElement(DetachmentForm, { csrf: csrf }), document.querySelector("#makeArmy"));
      ReactDOM.render(React.createElement(DetachmentList, { detachments: [] }), document.querySelector('#armies'));
      loadDetachmentsFromServer();
      break;
    case 'units':
      ReactDOM.render(React.createElement(UnitForm, { csrf: csrf }), document.querySelector("#makeArmy"));
      ReactDOM.render(React.createElement(UnitList, { units: [] }), document.querySelector("#armies"));
      loadUnitsFromServer();
      break;
    case 'models':
      ReactDOM.render(React.createElement(ModelForm, { csrf: csrf }), document.querySelector("#makeArmy"));
      ReactDOM.render(React.createElement(ModelList, { models: [] }), document.querySelector("#armies"));
      loadModelsFromServer();
      break;
    default:
      ReactDOM.render(React.createElement(ArmyForm, { csrf: csrf }), document.querySelector("#makeArmy"));
      ReactDOM.render(React.createElement(ArmyList, { armies: [] }), document.querySelector('#armies'));

      loadArmiesFromServer();
      break;
  }

  passchangeButton.addEventListener("click", function (e) {
    e.preventDefault();
    createPasschangeWindow(csrf);
    return false;
  });
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
  getToken();
});
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
  $("#domoMessage").animate({ width: 'toggle' }, 650);
};

var redirect = function redirect(response) {
  $("#domoMessage").animate({ width: 'hide' }, 650);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
