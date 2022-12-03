const items = [
    {
      "name": ".30-06 Box",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_30-06_Ammobox.png",
      "command": "#spawnitem Cal_30-06_Ammobox"
    },
    {
      "name": ".45 ACP Box",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_45_Ammobox.png",
      "command": "#spawnitem Cal_45_Ammobox"
    },
    {
      "name": "AWM",
      "amount": 0,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/c/ce/AWM.png",
      "command": "#spawnitem Cal_338_Ammobox 2 \n#spawnitem BP_Weapon_AWM 1\n#spawnitem BP_Magazine_AWM 2 AmmoCount 100\n#spawnitem BP_WeaponSuppressor_338_Black 1\n#spawnitem BP_WeaponScope_M82A1_Black 1"
    },
    {
      "name": "AWP",
      "amount": 0,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/78/AWP.png",
      "command": "#spawnitem BP_WeaponSuppressor_308_Black 1\n#spawnitem Cal_308_Ammobox 2\n#spawnitem BP_Weapon_AWP 1\n#spawnitem BP_Magazine_AWP 2 AmmoCount 100\n#spawnitem WeaponScope_Dragunov 1"
    },
    {
      "name": "VHS2",
      "amount": 0,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/92/VHS2.png",
      "command": "#spawnitem Cal_5_56x45mm_Ammobox 3\n#spawnitem BP_WeaponSuppressor_MK18 1\n#spawnitem BP_WeaponSights_RedDot_CA401B 1\n#spawnitem BP_Weapon_VHS2_Rail 1\n#spawnitem BP_Magazine_VHS2 3 AmmoCount 100"
    },
    {
      "name": "VHS BG",
      "amount": 0,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/60/VHS_BG.png",
      "command": "#spawnitem BP_Weapon_VHS_BG 1\n#spawnitem BP_Cal_40x46"
    },
    {
      "name": "UMP 45",
      "amount": 1,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/e4/UMP_45.png",
      "command": "#spawnitem Christmas_Present_UMP"
    },
    {
      "name": "RPK-74",
      "amount": 1,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/ad/RPK.png",
      "command": "#spawnitem Christmas_Present_RPK 1"
    },
    {
      "name": "MP5",
      "amount": 1,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/d5/MP5.png",
      "command": "#spawnitem Christmas_Present_MP5"
    },
    {
      "name": "MK18",
      "amount": 1,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f2/MK18.png",
      "command": "#spawnitem Christmas_Present_MK18"
    },
    {
      "name": "M82A1",
      "amount": 1,
      "rate": "legendary",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/27/M82A1.png",
      "command": "#spawnitem Christmas_Present_M82A1"
    },
    {
      "name": "M16A4",
      "amount": 1,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/M16.png",
      "command": "#spawnitem Christmas_Present_M16A4"
    },
    {
      "name": "M1 Garand",
      "amount": 1,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/5f/M1_Garand.png",
      "command": "#spawnitem Christmas_Present_M1"
    },
    {
      "name": "AK-47",
      "amount": 0,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/e7/AK47.png",
      "command": "#SpawnItem BP_Weapon_AK47\n#spawnitem BP_M70_Bayonet 1\n#spawnitem BP_Magazine_RPK 1 AmmoCount 100\n#spawnitem BP_ScopeRail_AK47 1\n#spawnitem BP_WeaponSights_RedDot_CA401B 1"
    },
    {
      "name": "AKM",
      "amount": 0,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/6c/AKM.png",
      "command": "#SpawnItem BPC_Weapon_AKM\n#spawnitem BP_M70_Bayonet 1\n#spawnitem BP_Magazine_RPK 1 AmmoCount 100\n#spawnitem BP_ScopeRail_AK47 1\n#spawnitem BP_WeaponSights_RedDot_CA401B 1"
    },
    {
      "name": "Grenade",
      "amount": 2,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/fb/Grenade.png",
      "command": "#spawnitem BP_Frag_Grenade 1"
    },
    {
      "name": "Car Repair Kit",
      "amount": 2,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/c/c7/Car_Repair_Kit.png",
      "command": "#SpawnItem Car_Repair_Kit"
    },
    {
      "name": "Weapon Cleaning Kit",
      "amount": 2,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Weapon_Cleaning_Kit.png",
      "command": "#SpawnItem Weapon_Cleaning_Kit"
    },
    {
      "name": "Tool Box",
      "amount": 2,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/10/Tool_Box.png",
      "command": "#SpawnItem Tool_Box"
    },
    {
      "name": "Armor Tactical Vest",
      "amount": 2,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/0a/Armor_Tactical_Vest.png",
      "command": "#SpawnItem Armor_Tactical_Vest_03"
    },
    {
      "name": "Beef Stew MRE",
      "amount": 5,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/63/Stew_MRE.png",
      "command": "#SpawnItem MRE_Stew"
    },
    {
      "name": "Emergency Bandage",
      "amount": 3,
      "rate": "common",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/54/Emergency_Bandage_Pack.png",
      "command": "#SpawnItem Emergency_Bandage_Big"
    },
    {
      "name": "Phoenix Tears",
      "amount": 2,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/97/Phoenix_Tears.png",
      "command": "#SpawnItem Phoenix_Tears"
    },
    {
      "name": "Key Card",
      "amount": 3,
      "rate": "legendary",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/25/Scum_Key_card.png",
      "command": "#spawnitem BP_KeyCard"
    },
    {
      "name": "Key Card",
      "amount": 1,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/25/Scum_Key_card.png",
      "command": "#spawnitem BP_KeyCard"
    },
    {
      "name": "Lock Protection Advanced",
      "amount": 3,
      "rate": "epic",
      "img": "https://scum.online/wp-content/uploads/scumimages/Lock_Security_Lvl3.png",
      "command": "#spawnitem Lock_Security_Lvl3 1"
    },
    {
      "name": "Enforced Lock",
      "amount": 3,
      "rate": "epic",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/25/Advanced_Lock.png",
      "command": "#spawnitem Lock_Item_Advanced"
    },
    {
      "name": "Medical Glove",
      "amount": 5,
      "rate": "rare",
      "img": "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/08/Medical_Gloves.png",
      "command": "#SpawnItem BP_Medical_Glove_01"
    },
    {
      "name": "5.56x45mm",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_5_56x45mm_Ammobox.png",
      "command": "#SpawnItem Cal_5_56x45mm_Ammobox"
    },
    {
      "name": "7.62x39mm",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_7_62x39mm_Ammobox.png",
      "command": "#SpawnItem  Cal_7_62x39mm_Ammobox"
    },
    {
      "name": "7.62x54mm",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_7_62x54mmR_Ammobox.png",
      "command": "#SpawnItem Cal_7_62x54mmR_Ammobox"
    },
    {
      "name": "9mm",
      "amount": 5,
      "rate": "common",
      "img": "https://scum.online/wp-content/uploads/scumimages/Cal_9mm_Ammobox.png",
      "command": "#SpawnItem Cal_9mm_Ammobox"
    }
  ]

export default items;
