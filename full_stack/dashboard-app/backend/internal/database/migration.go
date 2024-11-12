package database

// const init_query = `
// CREATE TABLE IF NOT EXISTS users (
//     user_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     username TEXT NOT NULL UNIQUE,
//     hashed_password TEXT NOT NULL
// );

// CREATE TABLE IF NOT EXISTS dashboards (
//     dashboard_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     data JSON NOT NULL,
//     created_by INTEGER,
//     FOREIGN KEY (created_by) REFERENCES users(user_id)
// );

// CREATE TABLE IF NOT EXISTS chart_components (
//     chart_component_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     required_fields JSON NOT NULL
// );
// `

// // const seed_components = `
// // INSERT INTO chart_components (required_fields)
// // VALUES (
// //     ('{
// //         "name":"area",
// //         "fields":{
// //             "name":"string",
// //             "uv":"int",
// //             "pv":"int",
// //             "amt":"int"
// //         }
// //     }'),
// //     ('{
// //         "name":"bar",
// //         "fields":{
// //             "name":"string",
// //             "value":"int"
// //         }
// //     }'),
// //     ('{
// //         "name":"composed",
// //         "fields":{
// //             "name":"string",
// //             "uv":"int",
// //             "pv":"int"
// //         }
// //     }'),
// //     ('{
// //         "name":"funnel",
// //         "fields":{
// //             "name":"string",
// //             "value":"int"
// //         }
// //     }');
// //     `
