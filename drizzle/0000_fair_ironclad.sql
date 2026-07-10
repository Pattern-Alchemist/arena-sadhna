CREATE TABLE "evidence_sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"siddhi_slug" text,
	"kind" text,
	"citation" text,
	"url" text,
	"notes" text,
	"confidence" text
);
--> statement-breakpoint
CREATE TABLE "manuscripts" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"original_title" text,
	"tradition" text,
	"century" text,
	"catalog_number" text,
	"language" text,
	"description" text,
	"condition_rating" text,
	"folios" integer,
	"source_url" text,
	CONSTRAINT "manuscripts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "reflections" (
	"id" serial PRIMARY KEY NOT NULL,
	"pen_name" text,
	"siddhi_slug" text,
	"title" text,
	"body" text,
	"tone" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "schools" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"focus" text,
	"description" text,
	"order_index" integer,
	CONSTRAINT "schools_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "siddhis" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"sanskrit" text,
	"category" text,
	"tradition" text,
	"level" text,
	"duration_hours" integer,
	"days" integer,
	"authenticity_score" integer,
	"summary" text,
	"description" text,
	"primary_mantra" text,
	"benefits" jsonb,
	"warnings" jsonb,
	"lineage" text,
	"pre_sadhna" jsonb,
	"procedure" jsonb,
	"yantra" jsonb,
	"faq" jsonb,
	"view_count" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "siddhis_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "evidence_siddhi_idx" ON "evidence_sources" USING btree ("siddhi_slug");