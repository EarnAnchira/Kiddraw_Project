import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const Story = db.define('storys',{
    StoryTitleEng:DataTypes.STRING,
    StoryImage:DataTypes.STRING,
    url:DataTypes.STRING
},{
    freezeTableName:true
});
export default Story;

(async()=>{
    await db.sync();
})();