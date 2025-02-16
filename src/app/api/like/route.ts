import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/app/data/likes.json");

const readData = () => {
  if (!fs.existsSync(dataFilePath)) {
    return { impressions: 0, likes: 0 };
  }
  return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
};

const writeData = (data: any) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
};

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { type } = await req.json();
  let data = readData();

  if (type === "impression") {
    data.impressions += 1;
  } else if (type === "like") {
    data.likes += 1;
  }

  writeData(data);
  return NextResponse.json(data);
}
