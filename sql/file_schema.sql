DROP TABLE IF EXISTS files;
CREATE TABLE files (
    file_uuid           text,
    file_name           text,
    file_type           text,
    owner_id            integer,
    permission_id       integer,
    parent_id           integer,
    active              boolean,
    file_id     serial  PRIMARY KEY
);
