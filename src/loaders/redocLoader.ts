import { DistributionController } from '@/controllers/DistributionController';
import { ErrorResponse } from '@/controllers/responses/ErrorResponse';
import { ResultResponse } from '@/controllers/responses/ResultResponse';
import { Express } from 'express';
import { getMetadataArgsStorage } from 'routing-controllers';
import { generateSwagger } from 'routing-controllers-openapi-extended';

export const redocLoader = (app: Express): void => {
  const storage = getMetadataArgsStorage();
  const title = 'ProbsCalc API documentation';
  const spec = generateSwagger(
    {
      controllers: [DistributionController],
      models: [ResultResponse, ErrorResponse],
      storage: storage,
    },
    {
      info: {
        description: 'OpenAPI Documentation for ProbsCalc API',
        title: title,
        version: '1.0.0',
      },
    }
  );

  const redocPage = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <!-- needed for adaptive design -->
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">
    
        <!--
        ReDoc doesn't change outer page styles
        -->
        <style>
          body {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div id="redoc"></div>
        <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
        </script>
        <script>
          Redoc.init(JSON.parse('${JSON.stringify(
            spec
          )}'), {}, document.getElementById('redoc'))
        </script>
      </body>
    </html>
  `;

  app.use('/docs', (req, res) => {
    res.send(redocPage);
  });
};
